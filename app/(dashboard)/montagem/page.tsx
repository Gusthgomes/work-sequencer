"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useObrasStore, Obra, Carrinho } from "@/app/store/obras";
import { STATUS_CARRINHO_COLORS, StatusCarrinho } from "@/app/lib/types";
import PendenciasAlerta from "@/app/components/PendenciasAlerta";

interface MotivoModal {
  itemId: string;
  nome: string;
}

function CarrinhoCard({
  carrinho,
  numeroObra,
  dataObra,
  onSolicitar,
  onReceber,
  onConcluirItem,
  onNaoCompleta,
}: {
  carrinho: Carrinho;
  numeroObra: string;
  dataObra?: string;
  onSolicitar: () => void;
  onReceber: () => void;
  onConcluirItem: (itemId: string) => void;
  onNaoCompleta: (itemId: string, nome: string) => void;
}) {
  const info = STATUS_CARRINHO_COLORS[carrinho.status as StatusCarrinho];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border p-4 bg-gray-900 transition-all`}
      style={{ borderColor: info.hex + "60" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: info.hex }} />
                    <span className="font-bold text-white">{numeroObra}</span>
                    <span className="text-xs text-gray-400">
                      {carrinho.kit === "KIT_3B" ? "Kit 3B" : "Kit 3K"}
                    </span>
                  </div>
                  {dataObra && (
                    <p className="text-xs text-gray-500 mb-1">
                      📅 {new Date(dataObra).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                    </p>
                  )}
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${info.bg} ${info.text}`}
          >
            {info.label}
          </span>
        </div>
      </div>

      {/* Itens */}
      {(carrinho.status === "em_montagem" || carrinho.status === "montagem_pendente") && (
        <div className="space-y-2 mb-4">
          {carrinho.itens.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 rounded-lg bg-gray-800/60 border border-gray-700/50"
            >
              <div>
                <p className="text-sm font-medium text-white">{item.nome}</p>
                <p className="text-xs text-gray-400">{item.banca}</p>
                {item.montagemStatus === "nao_completa" && (
                  <p className="text-xs text-red-400 mt-0.5">⚠ {item.montagemObservacao}</p>
                )}
              </div>
              {!item.montagemStatus && (
                <div className="flex gap-1.5 ml-3 flex-shrink-0">
                  <button
                    onClick={() => onConcluirItem(item.id)}
                    className="px-2 py-1 rounded-lg bg-green-700 hover:bg-green-600 text-white text-xs font-medium transition-colors"
                  >
                    ✓ OK
                  </button>
                  <button
                    onClick={() => onNaoCompleta(item.id, item.nome)}
                    className="px-2 py-1 rounded-lg bg-red-700 hover:bg-red-600 text-white text-xs font-medium transition-colors"
                  >
                    ✗
                  </button>
                </div>
              )}
              {item.montagemStatus === "concluida" && (
                <span className="text-green-400 text-xs font-medium ml-3">✓ Concluído</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Ações */}
      <div className="space-y-2">
        {carrinho.status === "concluido" && !carrinho.solicitado && (
          <button
            onClick={onSolicitar}
            className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition-colors"
          >
            🛒 Solicitar Carrinho
          </button>
        )}

        {carrinho.status === "em_movimentacao" && !carrinho.recebido && (
          <div>
            <div className="mb-2 px-3 py-2 rounded-lg bg-orange-900/30 border border-orange-500/30 text-orange-300 text-xs text-center">
              🚚 Carrinho em trânsito...
            </div>
            <button
              onClick={onReceber}
              className="w-full py-2.5 rounded-xl bg-gray-600 hover:bg-gray-500 text-white font-medium text-sm transition-colors"
            >
              ✅ Confirmar Recebimento
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function MontagemPage() {
  const { obras, setObras, updateCarrinho, updateItem } = useObrasStore();
  const [loading, setLoading] = useState(false);
  const [motivoModal, setMotivoModal] = useState<MotivoModal | null>(null);
  const [motivo, setMotivo] = useState("");
  const [filterStatus, setFilterStatus] = useState<"disponiveis" | "em_movimentacao" | "em_montagem" | "todos">("todos");
  const [filtroData, setFiltroData] = useState<string>("");

  const fetchObras = useCallback(async () => {
    setLoading(true);
    try {
      const url = filtroData ? `/api/obras?data=${filtroData}` : "/api/obras";
      const res = await fetch(url);
      const data: Obra[] = await res.json();
      setObras(data);
    } finally {
      setLoading(false);
    }
  }, [setObras, filtroData]);

  useEffect(() => {
    fetchObras();
    const i = setInterval(fetchObras, 10000);
    return () => clearInterval(i);
  }, [fetchObras]);

  const handleSolicitar = async (carrinhoId: string) => {
    const res = await fetch(`/api/carrinhos/${carrinhoId}/solicitar`, { method: "PATCH" });
    if (res.ok) {
      updateCarrinho(carrinhoId, { status: "em_movimentacao", solicitado: true });
    }
  };

  const handleReceber = async (carrinhoId: string) => {
    const res = await fetch(`/api/carrinhos/${carrinhoId}/receber`, { method: "PATCH" });
    if (res.ok) {
      updateCarrinho(carrinhoId, { status: "em_montagem", recebido: true });
    }
  };

  const handleConcluirItem = async (itemId: string) => {
    const res = await fetch(`/api/montagem/item/${itemId}/concluir`, { method: "PATCH" });
    if (res.ok) {
      updateItem(itemId, { montagemStatus: "concluida" });
      await fetchObras();
    }
  };

  const handleNaoCompleta = async () => {
    if (!motivoModal || !motivo.trim()) return;
    const res = await fetch(`/api/montagem/item/${motivoModal.itemId}/nao-completa`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ motivo }),
    });
    if (res.ok) {
      updateItem(motivoModal.itemId, {
        montagemStatus: "nao_completa",
        montagemObservacao: motivo,
      });
      setMotivoModal(null);
      setMotivo("");
      await fetchObras();
    }
  };

  const carrinhosFiltrados = obras.flatMap((o) =>
    o.carrinhos
      .filter((c) => {
        if (filterStatus === "disponiveis") return c.status === "concluido";
        if (filterStatus === "em_movimentacao") return c.status === "em_movimentacao";
        if (filterStatus === "em_montagem") return ["em_montagem", "montagem_pendente"].includes(c.status);
        return ["concluido", "em_movimentacao", "em_montagem", "montagem_pendente"].includes(c.status);
      })
      .map((c) => ({ carrinho: c, obra: o as Obra }))
  );

  const countByStatus = {
    disponiveis: obras.flatMap((o) => o.carrinhos).filter((c) => c.status === "concluido").length,
    em_movimentacao: obras.flatMap((o) => o.carrinhos).filter((c) => c.status === "em_movimentacao").length,
    em_montagem: obras.flatMap((o) => o.carrinhos).filter((c) => ["em_montagem", "montagem_pendente"].includes(c.status)).length,
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">🔧 Montagem / Produção</h1>
            <p className="text-gray-400 text-sm mt-1">
              Gerencie os carrinhos de montagem
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={filtroData}
                onChange={(e) => setFiltroData(e.target.value)}
                className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]"
              />
              {filtroData && (
                <button
                  onClick={() => setFiltroData("")}
                  className="px-3 py-2 rounded-lg bg-gray-700 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
            <button
              onClick={fetchObras}
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white text-sm transition-colors"
            >
              ↻
            </button>
          </div>
        </div>

        {/* Alerta de pendências de separação */}
        <PendenciasAlerta />

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => setFilterStatus("disponiveis")}
            className={`p-4 rounded-xl border transition-all text-left ${
              filterStatus === "disponiveis"
                ? "border-green-500 bg-green-900/20"
                : "border-gray-700 bg-gray-900 hover:border-gray-600"
            }`}
          >
            <p className="text-2xl font-bold text-white">{countByStatus.disponiveis}</p>
            <p className="text-xs text-gray-400">Prontos para solicitar</p>
            <div className="w-full h-1 rounded-full bg-green-500 mt-2" />
          </button>
          <button
            onClick={() => setFilterStatus("em_movimentacao")}
            className={`p-4 rounded-xl border transition-all text-left ${
              filterStatus === "em_movimentacao"
                ? "border-orange-500 bg-orange-900/20"
                : "border-gray-700 bg-gray-900 hover:border-gray-600"
            }`}
          >
            <p className="text-2xl font-bold text-white">{countByStatus.em_movimentacao}</p>
            <p className="text-xs text-gray-400">Em movimentação</p>
            <div className="w-full h-1 rounded-full bg-orange-500 mt-2" />
          </button>
          <button
            onClick={() => setFilterStatus("em_montagem")}
            className={`p-4 rounded-xl border transition-all text-left ${
              filterStatus === "em_montagem"
                ? "border-gray-500 bg-gray-800"
                : "border-gray-700 bg-gray-900 hover:border-gray-600"
            }`}
          >
            <p className="text-2xl font-bold text-white">{countByStatus.em_montagem}</p>
            <p className="text-xs text-gray-400">Em montagem</p>
            <div className="w-full h-1 rounded-full bg-gray-500 mt-2" />
          </button>
        </div>

        {/* Filtro */}
        <div className="flex gap-2 mb-6">
          {(["todos", "disponiveis", "em_movimentacao", "em_montagem"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilterStatus(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filterStatus === f
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              {f === "todos" ? "Todos" :
               f === "disponiveis" ? "Prontos" :
               f === "em_movimentacao" ? "Em trânsito" : "Em montagem"}
            </button>
          ))}
        </div>

        {/* Grid de carrinhos */}
        {loading && carrinhosFiltrados.length === 0 ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : carrinhosFiltrados.length === 0 ? (
          <div className="text-center py-16 text-gray-600">
            <p className="text-4xl mb-4">🔧</p>
            <p>Nenhum carrinho disponível com este filtro</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {carrinhosFiltrados.map(({ carrinho, obra }) => (
              <CarrinhoCard
                key={carrinho.id}
                carrinho={carrinho}
                numeroObra={obra.numeroObra}
                dataObra={obra.dataObra}
                onSolicitar={() => handleSolicitar(carrinho.id)}
                onReceber={() => handleReceber(carrinho.id)}
                onConcluirItem={handleConcluirItem}
                onNaoCompleta={(itemId, nome) => setMotivoModal({ itemId, nome })}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal de motivo */}
      <AnimatePresence>
        {motivoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-gray-900 rounded-2xl border border-gray-700 p-6 shadow-2xl"
            >
              <h3 className="text-lg font-bold text-white mb-1">
                Montagem não completa
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Item: <span className="text-white font-medium">{motivoModal.nome}</span>
              </p>
              <label className="block text-sm text-gray-300 mb-2">
                Motivo (obrigatório)
              </label>
              <select
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-red-500 mb-3"
              >
                <option value="">-- Selecione o motivo --</option>
                <option value="Falta de material">Falta de material</option>
                <option value="Material não conforme">Material não conforme</option>
                <option value="Problema técnico">Problema técnico</option>
                <option value="Aguardando peça">Aguardando peça</option>
                <option value="Outro">Outro</option>
              </select>
              {motivo === "Outro" && (
                <textarea
                  placeholder="Descreva o motivo..."
                  className="w-full px-3 py-2 rounded-xl bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-red-500 mb-3 resize-none"
                  rows={3}
                  onChange={(e) => setMotivo(e.target.value)}
                />
              )}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => { setMotivoModal(null); setMotivo(""); }}
                  className="flex-1 py-2.5 rounded-xl bg-gray-800 text-gray-400 hover:text-white text-sm font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleNaoCompleta}
                  disabled={!motivo}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-colors disabled:opacity-50"
                >
                  Confirmar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
