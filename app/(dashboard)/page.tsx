"use client";

import { useEffect, useState, useCallback, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useObrasStore, Obra, Carrinho } from "@/app/store/obras";
import { STATUS_CARRINHO_COLORS, StatusCarrinho } from "@/app/lib/types";
import { useAuthStore } from "@/app/store/auth";

const DashboardScene = lazy(() => import("@/app/components/3d/DashboardScene"));

interface DashboardStats {
  totalObras: number;
  emAndamento: number;
  separadas: number;
  emMontagem: number;
  concluidas: number;
  pendentes: number;
  carrinhos3B: number;
  carrinhos3K: number;
  diferencaLinhas: number;
  alertaDiferenca: boolean;
}

interface CarrinhoComObra extends Carrinho {
  numeroObra: string;
}

function StatCard({ label, value, color, icon }: {
  label: string;
  value: number;
  color: string;
  icon: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-xl border ${color} bg-gray-900/60 backdrop-blur`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-xs text-gray-400">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

function StatusBadge({ status }: { status: StatusCarrinho }) {
  const info = STATUS_CARRINHO_COLORS[status];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${info.bg} ${info.text}`}>
      {info.label}
    </span>
  );
}

export default function DashboardPage() {
  const { obras, setObras, loading, setLoading } = useObrasStore();
  const { user } = useAuthStore();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [selectedCarrinho, setSelectedCarrinho] = useState<string | null>(null);
  const [filterKit, setFilterKit] = useState<"all" | "KIT_3B" | "KIT_3K">("all");
  const [view, setView] = useState<"3d" | "list">("3d");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [obrasRes, statsRes] = await Promise.all([
        fetch("/api/obras"),
        fetch("/api/dashboard"),
      ]);
      const obrasData: Obra[] = await obrasRes.json();
      const statsData: DashboardStats = await statsRes.json();
      setObras(obrasData);
      setStats(statsData);
    } finally {
      setLoading(false);
    }
  }, [setObras, setLoading]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, [fetchData]);

  const allCarrinhos: CarrinhoComObra[] = obras.flatMap((o) =>
    o.carrinhos
      .filter((c) => filterKit === "all" || c.kit === filterKit)
      .map((c) => ({ ...c, numeroObra: o.numeroObra }))
  );

  const selectedData = selectedCarrinho
    ? allCarrinhos.find((c) => c.id === selectedCarrinho)
    : null;

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/50">
        <div>
          <h1 className="text-lg font-bold text-white">Dashboard</h1>
          <p className="text-xs text-gray-400">
            Olá, {user?.name} — visão em tempo real
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Alerta de diferença */}
          {stats?.alertaDiferenca && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-medium"
            >
              ⚠️ Diferença de {stats.diferencaLinhas} obras entre 3B e 3K
            </motion.div>
          )}

          {/* Filtro kit */}
          <div className="flex rounded-lg overflow-hidden border border-gray-700">
            {(["all", "KIT_3B", "KIT_3K"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setFilterKit(k)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  filterKit === k
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white bg-gray-900"
                }`}
              >
                {k === "all" ? "Todos" : k === "KIT_3B" ? "Kit 3B" : "Kit 3K"}
              </button>
            ))}
          </div>

          {/* Toggle view */}
          <div className="flex rounded-lg overflow-hidden border border-gray-700">
            <button
              onClick={() => setView("3d")}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                view === "3d" ? "bg-blue-600 text-white" : "text-gray-400 bg-gray-900 hover:text-white"
              }`}
            >
              3D
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                view === "list" ? "bg-blue-600 text-white" : "text-gray-400 bg-gray-900 hover:text-white"
              }`}
            >
              Lista
            </button>
          </div>

          <button
            onClick={fetchData}
            className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-white text-xs transition-colors"
          >
            ↻ Atualizar
          </button>
        </div>
      </div>

      {/* KPIs */}
      {stats && (
        <div className="grid grid-cols-4 gap-3 px-6 py-3 border-b border-gray-800">
          <StatCard label="Em Andamento" value={stats.emAndamento} color="border-yellow-500/30" icon="🟡" />
          <StatCard label="Separadas" value={stats.separadas} color="border-green-500/30" icon="🟢" />
          <StatCard label="Em Montagem" value={stats.emMontagem} color="border-gray-500/30" icon="⚫" />
          <StatCard label="Pendentes" value={stats.pendentes} color="border-red-500/30" icon="🔴" />
        </div>
      )}

      {/* Conteúdo principal */}
      <div className="flex flex-1 overflow-hidden">
        {/* Cena 3D ou lista */}
        <div className="flex-1 relative">
          {loading && obras.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <p className="text-gray-400 text-sm">Carregando obras...</p>
              </div>
            </div>
          ) : obras.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">📦</p>
                <p className="text-gray-400">Nenhuma obra cadastrada</p>
                {user?.role === "ADMIN" && (
                  <p className="text-gray-600 text-sm mt-1">
                    Vá em Admin para cadastrar obras
                  </p>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className={view === "3d" ? "absolute inset-0" : "hidden"}>
                <Suspense fallback={
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                }>
                  <DashboardScene
                    carrinhos={allCarrinhos}
                    onSelectCarrinho={setSelectedCarrinho}
                  />
                </Suspense>
              </div>
              <div className={view !== "3d" ? "p-6 overflow-y-auto h-full" : "hidden"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {allCarrinhos.map((c) => {
                    const info = STATUS_CARRINHO_COLORS[c.status as StatusCarrinho];
                    return (
                      <motion.div
                        key={c.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedCarrinho(c.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-colors ${
                          selectedCarrinho === c.id
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-gray-700 bg-gray-900 hover:border-gray-600"
                        }`}
                      >
                        <div className={`w-full h-2 rounded-full ${info.bg} mb-3`} />
                        <p className="font-bold text-white text-lg">{c.numeroObra}</p>
                        <p className="text-gray-400 text-xs mb-2">
                          {c.kit === "KIT_3B" ? "Kit 3B" : "Kit 3K"}
                        </p>
                        <StatusBadge status={c.status as StatusCarrinho} />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Painel lateral de detalhes */}
        <AnimatePresence>
          {selectedData && (
            <motion.div
              initial={{ x: 320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 320, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-80 bg-gray-900/95 border-l border-gray-800 flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <div>
                  <h3 className="font-bold text-white">{selectedData.numeroObra}</h3>
                  <p className="text-gray-400 text-xs">
                    {selectedData.kit === "KIT_3B" ? "Kit 3B" : "Kit 3K"}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCarrinho(null)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 border-b border-gray-800">
                <StatusBadge status={selectedData.status as StatusCarrinho} />
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Itens
                </h4>
                {selectedData.itens.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-lg bg-gray-800/60 border border-gray-700/50"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">{item.nome}</span>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded ${
                          item.status === "concluido"
                            ? "bg-green-900 text-green-300"
                            : item.status === "pendente"
                            ? "bg-red-900 text-red-300"
                            : item.status === "em_andamento"
                            ? "bg-yellow-900 text-yellow-300"
                            : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {item.status === "nao_iniciado"
                          ? "Não iniciado"
                          : item.status === "em_andamento"
                          ? "Em andamento"
                          : item.status === "concluido"
                          ? "Concluído"
                          : "Pendente"}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{item.banca}</p>
                    {item.pendencias.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {item.pendencias.map((p) => (
                          <div key={p.id} className="text-xs text-red-400">
                            • {p.codigoMaterial} — qtd: {p.quantidade}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legenda */}
      <div className="flex items-center gap-4 px-6 py-2 border-t border-gray-800 bg-gray-900/50 flex-wrap">
        {Object.entries(STATUS_CARRINHO_COLORS).map(([key, val]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${val.bg}`} />
            <span className="text-xs text-gray-500">{val.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
