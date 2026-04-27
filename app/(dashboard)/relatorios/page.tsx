"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

function Bar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  );
}

export default function RelatoriosPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch_ = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/dashboard");
        setStats(await res.json());
      } finally {
        setLoading(false);
      }
    };
    fetch_();
  }, []);

  const total = stats ? stats.totalObras + stats.concluidas : 1;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">📊 Relatórios</h1>
          <p className="text-gray-400 text-sm mt-1">Visão geral e gargalos do processo</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : stats ? (
          <div className="space-y-6">
            {/* Alerta de diferença */}
            {stats.alertaDiferenca && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/40"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <p className="font-bold text-red-400">Alerta: Diferença entre linhas</p>
                    <p className="text-sm text-red-300">
                      Diferença de {stats.diferencaLinhas} obras entre Kit 3B ({stats.carrinhos3B}) e Kit 3K ({stats.carrinhos3K})
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* KPIs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Total Ativas", value: stats.totalObras, color: "text-white" },
                { label: "Concluídas", value: stats.concluidas, color: "text-blue-400" },
                { label: "Em Andamento", value: stats.emAndamento, color: "text-yellow-400" },
                { label: "Pendentes", value: stats.pendentes, color: "text-red-400" },
              ].map((k) => (
                <motion.div
                  key={k.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-gray-900 border border-gray-800 text-center"
                >
                  <p className={`text-3xl font-bold ${k.color}`}>{k.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{k.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Funil de status */}
            <div className="p-5 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="font-semibold text-white mb-4">Funil do Processo</h3>
              <div className="space-y-4">
                {[
                  { label: "Pendentes (aguardando separação)", value: stats.pendentes, color: "bg-red-500" },
                  { label: "Em andamento (separação DALG)", value: stats.emAndamento, color: "bg-yellow-500" },
                  { label: "Separadas (aguardando DPRO)", value: stats.separadas, color: "bg-green-500" },
                  { label: "Em montagem", value: stats.emMontagem, color: "bg-gray-500" },
                  { label: "Concluídas", value: stats.concluidas, color: "bg-blue-500" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-white font-medium">{item.value}</span>
                    </div>
                    <Bar value={item.value} max={total} color={item.color} />
                  </div>
                ))}
              </div>
            </div>

            {/* Balanço das linhas */}
            <div className="p-5 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="font-semibold text-white mb-4">Balanço das Linhas</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Kit 3B</span>
                    <span className={`font-bold ${stats.carrinhos3B > stats.carrinhos3K ? "text-yellow-400" : "text-white"}`}>
                      {stats.carrinhos3B} carrinhos
                    </span>
                  </div>
                  <Bar value={stats.carrinhos3B} max={Math.max(stats.carrinhos3B, stats.carrinhos3K, 1)} color="bg-purple-500" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Kit 3K</span>
                    <span className={`font-bold ${stats.carrinhos3K > stats.carrinhos3B ? "text-yellow-400" : "text-white"}`}>
                      {stats.carrinhos3K} carrinhos
                    </span>
                  </div>
                  <Bar value={stats.carrinhos3K} max={Math.max(stats.carrinhos3B, stats.carrinhos3K, 1)} color="bg-cyan-500" />
                </div>
              </div>
              {stats.diferencaLinhas > 0 && (
                <p className={`text-xs mt-3 ${stats.alertaDiferenca ? "text-red-400" : "text-gray-500"}`}>
                  Diferença atual: {stats.diferencaLinhas} obra(s) — {stats.alertaDiferenca ? "⚠️ Atenção!" : "✓ Ok"}
                </p>
              )}
            </div>

            {/* Legenda */}
            <div className="p-5 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="font-semibold text-white mb-3">Regras do Processo</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📏 Diferença máxima de 3 obras entre Kit 3B e Kit 3K</li>
                <li>👥 Kit 3B: 2 pessoas | Kit 3K: 3 pessoas</li>
                <li>🛒 Carrinhos 3B e 3K são independentes por obra</li>
                <li>✅ Obra finalizada somente quando ambos os kits estão com montagem concluída</li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
