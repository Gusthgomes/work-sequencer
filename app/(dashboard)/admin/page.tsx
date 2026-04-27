"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Usuario {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "DALG" | "DPRO";
  createdAt: string;
}

interface ObraForm {
  numeroObra: string;
  dataObra: string;
}

interface ObraImport {
  numeroObra: string;
  dataObra: string; // YYYY-MM-DD
  dataOriginal: string;
  valid: boolean;
  error?: string;
}

interface BatchResult {
  created: string[];
  skipped: string[];
  errors: { numeroObra: string; error: string }[];
}

interface UserForm {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "DALG" | "DPRO";
}

const ROLE_COLORS = {
  ADMIN: "bg-purple-900 text-purple-300",
  DALG: "bg-yellow-900 text-yellow-300",
  DPRO: "bg-blue-900 text-blue-300",
};

export default function AdminPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [obras, setObras] = useState<{ id: string; numeroObra: string; statusGeral: string; dataObra: string }[]>([]);
  const [tab, setTab] = useState<"usuarios" | "obras">("usuarios");
  const [loading, setLoading] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showObraForm, setShowObraForm] = useState(false);
  const [showImportForm, setShowImportForm] = useState(false);
  const [importText, setImportText] = useState("");
  const [importPreview, setImportPreview] = useState<ObraImport[]>([]);
  const [importLoading, setImportLoading] = useState(false);
  const [batchResult, setBatchResult] = useState<BatchResult | null>(null);
  const [userForm, setUserForm] = useState<UserForm>({ name: "", email: "", password: "", role: "DALG" });
  const [obraForm, setObraForm] = useState<ObraForm>({ numeroObra: "", dataObra: new Date().toISOString().split("T")[0] });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [usersRes, obrasRes] = await Promise.all([
        fetch("/api/admin/usuarios"),
        fetch("/api/obras"),
      ]);
      setUsuarios(await usersRes.json());
      setObras(await obrasRes.json());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/admin/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userForm),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      setSuccess("Usuário criado com sucesso!");
      setShowUserForm(false);
      setUserForm({ name: "", email: "", password: "", role: "DALG" });
      fetchData();
    } catch { setError("Erro ao criar usuário"); }
  };

  const handleCreateObra = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/obras", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obraForm),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      setSuccess(`Obra ${obraForm.numeroObra} cadastrada!`);
      setShowObraForm(false);
      setObraForm({ numeroObra: "", dataObra: new Date().toISOString().split("T")[0] });
      fetchData();
    } catch { setError("Erro ao cadastrar obra"); }
  };

  const handleDeleteObra = async (id: string) => {
    if (!confirm("Tem certeza que deseja remover esta obra?")) return;
    await fetch(`/api/obras/${id}`, { method: "DELETE" });
    fetchData();
  };

  const handleDeleteUser = async (id: string) => {
    if (!confirm("Tem certeza que deseja remover este usuário?")) return;
    await fetch("/api/admin/usuarios", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchData();
  };

  const parseImportText = (text: string): ObraImport[] => {
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const sep = line.includes("\t") ? "\t" : line.includes(";") ? ";" : ",";
        const parts = line.split(sep).map((p) => p.trim());
        const numeroObra = parts[0] ?? "";
        const dataOriginal = parts[1] ?? "";

        if (!numeroObra) return { numeroObra, dataOriginal, dataObra: "", valid: false, error: "Número da obra vazio" };
        if (!dataOriginal) return { numeroObra, dataOriginal, dataObra: "", valid: false, error: "Data vazia" };

        // DD/MM/YYYY → YYYY-MM-DD
        const match = dataOriginal.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        if (!match) return { numeroObra, dataOriginal, dataObra: "", valid: false, error: "Data inválida (use DD/MM/YYYY)" };

        const [, d, m, y] = match;
        const dataObra = `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
        return { numeroObra, dataOriginal, dataObra, valid: true };
      });
  };

  const handleImportTextChange = (text: string) => {
    setImportText(text);
    setBatchResult(null);
    setImportPreview(parseImportText(text));
  };

  const handleImportSubmit = async () => {
    const valid = importPreview.filter((o) => o.valid);
    if (valid.length === 0) return;

    setImportLoading(true);
    setError("");
    try {
      const res = await fetch("/api/obras/batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ obras: valid.map(({ numeroObra, dataObra }) => ({ numeroObra, dataObra })) }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      setBatchResult(data as BatchResult);
      fetchData();
    } catch {
      setError("Erro ao importar obras");
    } finally {
      setImportLoading(false);
    }
  };

  const handleCloseImport = () => {
    setShowImportForm(false);
    setImportText("");
    setImportPreview([]);
    setBatchResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">⚙️ Administração</h1>
          <p className="text-gray-400 text-sm mt-1">Gerencie usuários e obras</p>
        </div>

        {/* Feedback */}
        <AnimatePresence>
          {(error || success) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`mb-4 px-4 py-3 rounded-xl border text-sm ${
                error
                  ? "bg-red-500/20 border-red-500/30 text-red-400"
                  : "bg-green-500/20 border-green-500/30 text-green-400"
              }`}
              onAnimationComplete={() => { setTimeout(() => { setError(""); setSuccess(""); }, 3000); }}
            >
              {error || success}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tabs */}
        <div className="flex rounded-xl overflow-hidden border border-gray-700 mb-6">
          {(["usuarios", "obras"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                tab === t ? "bg-blue-600 text-white" : "bg-gray-900 text-gray-400 hover:text-white"
              }`}
            >
              {t === "usuarios" ? "👥 Usuários" : "🏗️ Obras"}
            </button>
          ))}
        </div>

        {/* Usuários */}
        {tab === "usuarios" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm">{usuarios.length} usuário(s)</p>
              <button
                onClick={() => setShowUserForm(!showUserForm)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
              >
                + Novo Usuário
              </button>
            </div>

            <AnimatePresence>
              {showUserForm && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={handleCreateUser}
                  className="mb-4 p-4 rounded-xl bg-gray-900 border border-gray-700 space-y-3 overflow-hidden"
                >
                  <h3 className="font-semibold text-white text-sm">Novo Usuário</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text" placeholder="Nome" required
                      value={userForm.name}
                      onChange={(e) => setUserForm((f) => ({ ...f, name: e.target.value }))}
                      className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="email" placeholder="Email" required
                      value={userForm.email}
                      onChange={(e) => setUserForm((f) => ({ ...f, email: e.target.value }))}
                      className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="password" placeholder="Senha" required
                      value={userForm.password}
                      onChange={(e) => setUserForm((f) => ({ ...f, password: e.target.value }))}
                      className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                    <select
                      value={userForm.role}
                      onChange={(e) => setUserForm((f) => ({ ...f, role: e.target.value as never }))}
                      className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option value="DALG">DALG — Separação</option>
                      <option value="DPRO">DPRO — Montagem</option>
                      <option value="ADMIN">ADMIN — Administrador</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
                      Criar
                    </button>
                    <button type="button" onClick={() => setShowUserForm(false)} className="px-4 py-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white text-sm transition-colors">
                      Cancelar
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : usuarios.length === 0 ? (
                <div className="text-center py-8 text-gray-600">Nenhum usuário cadastrado</div>
              ) : (
                usuarios.map((u) => (
                  <div key={u.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-900 border border-gray-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{u.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded font-bold ${ROLE_COLORS[u.role]}`}>
                          {u.role}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{u.email}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteUser(u.id)}
                      className="px-3 py-1.5 rounded-lg bg-red-900/50 text-red-400 hover:bg-red-800 text-xs transition-colors"
                    >
                      Remover
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Obras */}
        {tab === "obras" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm">{obras.length} obra(s)</p>
              <div className="flex gap-2">
                <button
                  onClick={() => { setShowImportForm(!showImportForm); setShowObraForm(false); }}
                  className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-medium transition-colors"
                >
                  📋 Importar Planilha
                </button>
                <button
                  onClick={() => { setShowObraForm(!showObraForm); setShowImportForm(false); }}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
                >
                  + Cadastrar Obra
                </button>
              </div>
            </div>

            <AnimatePresence>
              {showImportForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 p-4 rounded-xl bg-gray-900 border border-emerald-700/50 overflow-hidden"
                >
                  <h3 className="font-semibold text-white text-sm mb-1">Importar da Planilha</h3>
                  <p className="text-xs text-gray-400 mb-3">
                    Cole os dados copiados do Excel ou CSV. Cada linha deve ter: <span className="text-gray-200">número da obra</span> e <span className="text-gray-200">data (DD/MM/YYYY)</span>, separados por tab, vírgula ou ponto-e-vírgula.
                  </p>

                  {!batchResult ? (
                    <>
                      <textarea
                        rows={6}
                        placeholder={"209181\t29/04/2026\n210156\t29/04/2026\n211023\t29/04/2026"}
                        value={importText}
                        onChange={(e) => handleImportTextChange(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm font-mono focus:outline-none focus:border-emerald-500 resize-none mb-3"
                      />

                      {importPreview.length > 0 && (
                        <div className="mb-3">
                          <p className="text-xs text-gray-400 mb-2">
                            Preview — {importPreview.filter((o) => o.valid).length} válida(s)
                            {importPreview.filter((o) => !o.valid).length > 0 && (
                              <span className="text-red-400 ml-1">
                                · {importPreview.filter((o) => !o.valid).length} com erro
                              </span>
                            )}
                          </p>
                          <div className="max-h-48 overflow-y-auto space-y-1">
                            {importPreview.map((obra, i) => (
                              <div
                                key={i}
                                className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs ${
                                  obra.valid
                                    ? "bg-gray-800 text-gray-200"
                                    : "bg-red-900/30 text-red-400 border border-red-800/40"
                                }`}
                              >
                                <span className="font-mono font-medium">{obra.numeroObra || "—"}</span>
                                <span>{obra.dataOriginal || "—"}</span>
                                {!obra.valid && <span className="ml-2 text-red-400">{obra.error}</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <button
                          type="button"
                          disabled={importPreview.filter((o) => o.valid).length === 0 || importLoading}
                          onClick={handleImportSubmit}
                          className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors flex items-center gap-2"
                        >
                          {importLoading && <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                          Cadastrar {importPreview.filter((o) => o.valid).length > 0 ? importPreview.filter((o) => o.valid).length : ""} obra(s)
                        </button>
                        <button type="button" onClick={handleCloseImport} className="px-4 py-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white text-sm transition-colors">
                          Cancelar
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-3">
                      {batchResult.created.length > 0 && (
                        <div className="p-3 rounded-lg bg-green-900/30 border border-green-700/40 text-sm text-green-400">
                          ✅ {batchResult.created.length} obra(s) cadastrada(s): {batchResult.created.join(", ")}
                        </div>
                      )}
                      {batchResult.skipped.length > 0 && (
                        <div className="p-3 rounded-lg bg-yellow-900/30 border border-yellow-700/40 text-sm text-yellow-400">
                          ⏭️ {batchResult.skipped.length} já existia(m): {batchResult.skipped.join(", ")}
                        </div>
                      )}
                      {batchResult.errors.length > 0 && (
                        <div className="p-3 rounded-lg bg-red-900/30 border border-red-700/40 text-sm text-red-400">
                          ❌ {batchResult.errors.length} erro(s): {batchResult.errors.map((e) => e.numeroObra).join(", ")}
                        </div>
                      )}
                      <button type="button" onClick={handleCloseImport} className="px-4 py-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white text-sm transition-colors">
                        Fechar
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showObraForm && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={handleCreateObra}
                  className="mb-4 p-4 rounded-xl bg-gray-900 border border-gray-700 overflow-hidden"
                >
                  <h3 className="font-semibold text-white text-sm mb-3">Nova Obra</h3>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Número da Obra</label>
                      <input
                        type="text"
                        placeholder="ex: 2024-001"
                        required
                        value={obraForm.numeroObra}
                        onChange={(e) => setObraForm((f) => ({ ...f, numeroObra: e.target.value }))}
                        className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">Data da Obra</label>
                      <input
                        type="date"
                        required
                        value={obraForm.dataObra}
                        onChange={(e) => setObraForm((f) => ({ ...f, dataObra: e.target.value }))}
                        className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
                      Cadastrar
                    </button>
                    <button type="button" onClick={() => setShowObraForm(false)} className="px-3 py-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white text-sm transition-colors">
                      Cancelar
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Os carrinhos Kit 3B e Kit 3K serão criados automaticamente com todos os itens.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : obras.length === 0 ? (
                <div className="text-center py-8 text-gray-600">Nenhuma obra cadastrada</div>
              ) : (
                obras.map((o) => (
                  <div key={o.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-900 border border-gray-800">
                    <div>
                      <span className="font-bold text-white">{o.numeroObra}</span>
                      {o.dataObra && (
                        <span className="ml-2 text-xs text-blue-400">
                          📅 {new Date(o.dataObra).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                        </span>
                      )}
                      <span className="ml-2 text-xs text-gray-500">{o.statusGeral}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteObra(o.id)}
                      className="px-3 py-1.5 rounded-lg bg-red-900/50 text-red-400 hover:bg-red-800 text-xs transition-colors"
                    >
                      Remover
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
