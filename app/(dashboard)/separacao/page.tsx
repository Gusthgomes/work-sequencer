"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/app/store/auth";
import { useObrasStore, Obra, ItemSeparacao } from "@/app/store/obras";
import PendenciasAlerta from "@/app/components/PendenciasAlerta";

function useTimer(startTime?: string) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!startTime) return;
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - new Date(startTime).getTime()) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const fmt = (s: number) => {
    const h = Math.floor(s / 3600).toString().padStart(2, "0");
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, "0");
    const ss = (s % 60).toString().padStart(2, "0");
    return `${h}:${m}:${ss}`;
  };

  return fmt(elapsed);
}

interface PendenciaForm {
  codigoMaterial: string;
  quantidade: string;
  observacao: string;
}

function ItemCard({ item, readonly }: { item: ItemSeparacao; readonly: boolean }) {
  const [pendenciaForm, setPendenciaForm] = useState<PendenciaForm>({
    codigoMaterial: "",
    quantidade: "",
    observacao: "",
  });
  const [showPendencia, setShowPendencia] = useState(false);
  const [loading, setLoading] = useState(false);
  const { updateItem } = useObrasStore();
  const timer = useTimer(
    item.status === "em_andamento" && item.timerStart ? item.timerStart : undefined
  );

  const handleStart = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/separacao/item/${item.id}/timer/start`, { method: "POST" });
      const data = await res.json();
      updateItem(item.id, { status: "em_andamento", timerStart: data.timerStart });
    } finally {
      setLoading(false);
    }
  };

  const handleSetStatus = async (status: "concluido" | "pendente") => {
    if (status === "concluido") {
      await fetch(`/api/separacao/item/${item.id}/timer/stop`, { method: "POST" });
    }
    const res = await fetch(`/api/separacao/item/${item.id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    updateItem(item.id, { status: data.status });
    if (status === "pendente") setShowPendencia(true);
  };

  const handleAddPendencia = async () => {
    if (!pendenciaForm.codigoMaterial || !pendenciaForm.quantidade) return;
    setLoading(true);
    try {
      await fetch(`/api/separacao/item/${item.id}/pendencia`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          codigoMaterial: pendenciaForm.codigoMaterial,
          quantidade: parseInt(pendenciaForm.quantidade),
          observacao: pendenciaForm.observacao || undefined,
        }),
      });
      setPendenciaForm({ codigoMaterial: "", quantidade: "", observacao: "" });
    } finally {
      setLoading(false);
    }
  };

  const statusColor = {
    nao_iniciado: "border-gray-600 bg-gray-800/40",
    em_andamento: "border-yellow-500/50 bg-yellow-900/20",
    concluido: "border-green-500/50 bg-green-900/20",
    pendente: "border-red-500/50 bg-red-900/20",
  }[item.status];

  const statusLabel = {
    nao_iniciado: "Não iniciado",
    em_andamento: "Em andamento",
    concluido: "Concluído",
    pendente: "Pendente",
  }[item.status];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border p-4 transition-colors ${statusColor}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-white text-base">{item.nome}</h3>
          <p className="text-xs text-gray-400">{item.banca}</p>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${
            item.status === "concluido"
              ? "bg-green-900 text-green-300"
              : item.status === "pendente"
              ? "bg-red-900 text-red-300"
              : item.status === "em_andamento"
              ? "bg-yellow-900 text-yellow-300"
              : "bg-gray-700 text-gray-400"
          }`}
        >
          {statusLabel}
        </span>
      </div>

      {/* Cronômetro */}
      {item.status === "em_andamento" && (
        <div className="mb-3 px-3 py-2 rounded-lg bg-yellow-900/30 border border-yellow-500/30">
          <p className="text-xs text-yellow-400 mb-1">⏱ Em separação</p>
          <p className="text-2xl font-mono font-bold text-yellow-300">{timer}</p>
        </div>
      )}

      {item.timerStart && item.timerEnd && (
        <div className="mb-3 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700">
          <p className="text-xs text-gray-400">
            Tempo: {Math.round((new Date(item.timerEnd).getTime() - new Date(item.timerStart).getTime()) / 1000 / 60)} min
          </p>
        </div>
      )}

      {/* Pendências existentes */}
      {item.pendencias.length > 0 && (
        <div className="mb-3 space-y-1">
          {item.pendencias.map((p) => (
            <div key={p.id} className="flex items-center gap-2 text-xs text-red-400 bg-red-900/20 px-2 py-1 rounded">
              <span>⚠</span>
              <span>{p.codigoMaterial}</span>
              <span>— qtd: {p.quantidade}</span>
              {p.observacao && <span className="text-red-500">({p.observacao})</span>}
            </div>
          ))}
        </div>
      )}

      {/* Botões de ação */}
      {!readonly && (
        <div className="space-y-2">
          {item.status === "nao_iniciado" && (
            <button
              onClick={handleStart}
              disabled={loading}
              className="w-full py-2 rounded-lg bg-yellow-600 hover:bg-yellow-500 text-white text-sm font-medium transition-colors disabled:opacity-50"
            >
              ▶ Iniciar Separação
            </button>
          )}

          {item.status === "em_andamento" && (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleSetStatus("concluido")}
                className="py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-medium transition-colors"
              >
                ✓ Concluir
              </button>
              <button
                onClick={() => handleSetStatus("pendente")}
                className="py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-colors"
              >
                ! Pendente
              </button>
            </div>
          )}

          {item.status === "pendente" && (
            <button
              onClick={() => setShowPendencia(!showPendencia)}
              className="w-full py-2 rounded-lg bg-red-700 hover:bg-red-600 text-white text-sm font-medium transition-colors"
            >
              + Registrar Falta
            </button>
          )}
        </div>
      )}

      {/* Formulário de pendência */}
      <AnimatePresence>
        {showPendencia && !readonly && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 space-y-2 overflow-hidden"
          >
            <p className="text-xs font-semibold text-red-400">Material em falta:</p>
            <input
              type="text"
              placeholder="Código do material"
              value={pendenciaForm.codigoMaterial}
              onChange={(e) => setPendenciaForm((p) => ({ ...p, codigoMaterial: e.target.value }))}
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-red-500"
            />
            <input
              type="number"
              placeholder="Quantidade"
              value={pendenciaForm.quantidade}
              onChange={(e) => setPendenciaForm((p) => ({ ...p, quantidade: e.target.value }))}
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-red-500"
            />
            <input
              type="text"
              placeholder="Observação (opcional)"
              value={pendenciaForm.observacao}
              onChange={(e) => setPendenciaForm((p) => ({ ...p, observacao: e.target.value }))}
              className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-red-500"
            />
            <button
              onClick={handleAddPendencia}
              disabled={loading}
              className="w-full py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-colors disabled:opacity-50"
            >
              Registrar Pendência
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function useWakeLock(active: boolean) {
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    if (!active || !("wakeLock" in navigator)) return;

    let released = false;
    navigator.wakeLock.request("screen").then((sentinel) => {
      if (released) { sentinel.release(); return; }
      wakeLockRef.current = sentinel;
    }).catch(() => {/* silently ignore — not supported in all browsers */});

    const reacquire = () => {
      if (!released && document.visibilityState === "visible") {
        navigator.wakeLock.request("screen").then((s) => {
          if (released) { s.release(); return; }
          wakeLockRef.current = s;
        }).catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", reacquire);

    return () => {
      released = true;
      document.removeEventListener("visibilitychange", reacquire);
      wakeLockRef.current?.release();
      wakeLockRef.current = null;
    };
  }, [active]);
}

export default function SeparacaoPage() {
  const { obras, setObras } = useObrasStore();
  const { user } = useAuthStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Persiste obra e kit na URL para sobreviver a recargas
  const [selectedObraId, setSelectedObraIdState] = useState<string>(
    searchParams.get("obra") ?? ""
  );
  const [activeKit, setActiveKitState] = useState<"KIT_3B" | "KIT_3K">(
    (searchParams.get("kit") as "KIT_3B" | "KIT_3K") ?? "KIT_3B"
  );
  const [loading, setLoading] = useState(false);
  const [filtroData, setFiltroData] = useState<string>(
    searchParams.get("data") ?? ""
  );
  const [fetchError, setFetchError] = useState("");

  const isReadonly = user?.role === "DPRO";

  // Detecta se há separação ativa (algum item em_andamento na obra selecionada)
  const selectedObra = obras.find((o) => o.id === selectedObraId);
  const carrinho = selectedObra?.carrinhos.find((c) => c.kit === activeKit);
  const hasActiveSeparation = selectedObra?.carrinhos.some((c) =>
    c.itens.some((i) => i.status === "em_andamento")
  ) ?? false;

  // Wake Lock: mantém a tela acesa enquanto houver separação em andamento
  useWakeLock(hasActiveSeparation);

  const updateUrl = useCallback(
    (obraId: string, kit: "KIT_3B" | "KIT_3K", data: string) => {
      const params = new URLSearchParams();
      if (obraId) params.set("obra", obraId);
      if (kit !== "KIT_3B") params.set("kit", kit);
      if (data) params.set("data", data);
      const qs = params.toString();
      router.replace(`/separacao${qs ? `?${qs}` : ""}`, { scroll: false });
    },
    [router]
  );

  const setSelectedObraId = useCallback(
    (id: string) => {
      setSelectedObraIdState(id);
      updateUrl(id, activeKit, filtroData);
    },
    [activeKit, filtroData, updateUrl]
  );

  const setActiveKit = useCallback(
    (kit: "KIT_3B" | "KIT_3K") => {
      setActiveKitState(kit);
      updateUrl(selectedObraId, kit, filtroData);
    },
    [selectedObraId, filtroData, updateUrl]
  );

  const fetchObras = useCallback(async () => {
    setLoading(true);
    setFetchError("");
    try {
      const url = filtroData ? `/api/obras?data=${filtroData}` : "/api/obras";
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) {
        setFetchError(data?.error ?? "Erro ao buscar obras");
        setObras([]);
        return;
      }
      setObras(Array.isArray(data) ? data : []);
    } catch {
      setFetchError("Erro de conexão ao buscar obras");
      setObras([]);
    } finally {
      setLoading(false);
    }
  }, [setObras, filtroData]);

  useEffect(() => {
    fetchObras();
  }, [fetchObras]);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              📦 {isReadonly ? "Separação (Visualização)" : "Separação de Materiais"}
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {isReadonly
                ? "Visualização das separações — somente leitura"
                : "Gerencie a separação dos kits por obra"}
            </p>
          </div>
          {hasActiveSeparation && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-900/40 border border-yellow-600/40 text-yellow-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Tela ativa
            </div>
          )}
        </div>

        {/* Painel de itens pendentes */}
        <PendenciasAlerta showList onTratado={fetchObras} />

        {/* Filtro de data + seleção de obra */}
        <div className="mb-6 p-4 rounded-xl bg-gray-900 border border-gray-800 space-y-3">
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Filtrar por Data da Obra
              </label>
              <input
                type="date"
                value={filtroData}
                onChange={(e) => setFiltroData(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 [color-scheme:dark]"
              />
            </div>
            <button
              onClick={() => {
                updateUrl(selectedObraId, activeKit, filtroData);
                fetchObras();
              }}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
            >
              Buscar
            </button>
            {filtroData && (
              <button
                onClick={() => {
                  setFiltroData("");
                  updateUrl(selectedObraId, activeKit, "");
                }}
                className="px-4 py-2.5 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm transition-colors"
              >
                Limpar
              </button>
            )}
          </div>

          {fetchError && (
            <p className="text-xs text-red-400 bg-red-900/20 px-3 py-2 rounded-lg border border-red-800/40">
              ⚠ {fetchError}
            </p>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Selecionar Obra
              {filtroData && !loading && (
                <span className={`ml-2 text-xs ${obras.length > 0 ? "text-blue-400" : "text-yellow-400"}`}>
                  — {obras.length} obra(s) em {new Date(filtroData + "T12:00:00").toLocaleDateString("pt-BR")}
                </span>
              )}
            </label>

            {filtroData && !loading && obras.length === 0 && !fetchError ? (
              <div className="w-full px-4 py-3 rounded-xl bg-yellow-900/20 border border-yellow-700/40 text-yellow-400 text-sm">
                Nenhuma obra encontrada para{" "}
                <strong>{new Date(filtroData + "T12:00:00").toLocaleDateString("pt-BR")}</strong>.
                Verifique se as obras foram cadastradas para essa data.
              </div>
            ) : (
              <select
                value={selectedObraId}
                onChange={(e) => setSelectedObraId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">-- Selecione uma obra --</option>
                {obras.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.numeroObra}
                    {o.dataObra
                      ? ` — ${new Date(o.dataObra).toLocaleDateString("pt-BR", { timeZone: "UTC" })}`
                      : ""}
                    {" — "}
                    {o.statusGeral === "pendente"
                      ? "Pendente"
                      : o.statusGeral === "em_andamento"
                      ? "Em andamento"
                      : o.statusGeral === "separado"
                      ? "Separado"
                      : o.statusGeral === "em_montagem"
                      ? "Em montagem"
                      : "Concluído"}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {selectedObra && (
          <>
            {/* Tabs de Kit */}
            <div className="flex rounded-xl overflow-hidden border border-gray-700 mb-6">
              {(["KIT_3B", "KIT_3K"] as const).map((kit) => {
                const c = selectedObra.carrinhos.find((x) => x.kit === kit);
                const statusColor = c?.status === "concluido" ? "bg-green-600" :
                  c?.status === "pendente" ? "bg-red-600" :
                  c?.status === "em_andamento" ? "bg-yellow-600" : "bg-gray-700";
                return (
                  <button
                    key={kit}
                    onClick={() => setActiveKit(kit)}
                    className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                      activeKit === kit ? "bg-blue-600 text-white" : "bg-gray-900 text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${statusColor}`} />
                    {kit === "KIT_3B" ? "Kit 3B" : "Kit 3K"}
                  </button>
                );
              })}
            </div>

            {/* Itens do carrinho */}
            {carrinho ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-sm font-semibold text-gray-300">
                    Itens do {activeKit === "KIT_3B" ? "Kit 3B" : "Kit 3K"}
                  </h2>
                  <span className="text-xs text-gray-500">
                    {carrinho.itens.filter((i) => i.status === "concluido").length}/
                    {carrinho.itens.length} concluídos
                  </span>
                </div>
                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : (
                  carrinho.itens.map((item) => (
                    <ItemCard key={item.id} item={item} readonly={isReadonly} />
                  ))
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Carrinho não encontrado para este kit
              </div>
            )}
          </>
        )}

        {!selectedObra && !loading && (
          <div className="text-center py-16 text-gray-600">
            <p className="text-4xl mb-4">📋</p>
            <p>Selecione uma obra para ver os itens de separação</p>
          </div>
        )}
      </div>
    </div>
  );
}
