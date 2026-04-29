"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface PendenciaResumo {
  id: string;
  codigoMaterial: string;
  quantidade: number;
  observacao?: string | null;
  tratado: boolean;
  tratatoAt?: string | null;
  createdAt: string;
  item: { id: string; nome: string; banca: string };
  kit: "KIT_3B" | "KIT_3K";
  obraId: string;
  numeroObra: string;
  dataObra: string;
}

interface ToastMsg {
  id: number;
  type: "warning" | "success";
  text: string;
}

/** Intervalo entre lembretes periódicos: 5 minutos */
const REMINDER_INTERVAL_MS = 5 * 60 * 1000;

interface Props {
  /** Se true, exibe também a lista completa de pendências não tratadas */
  showList?: boolean;
  /** Callback chamado após tratar uma pendência (para recarregar dados da página pai) */
  onTratado?: () => void;
}

export default function PendenciasAlerta({ showList = false, onTratado }: Props) {
  const [pendencias, setPendencias] = useState<PendenciaResumo[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [toasts, setToasts] = useState<ToastMsg[]>([]);
  const toastIdRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const addToast = useCallback((type: ToastMsg["type"], text: string) => {
    const id = ++toastIdRef.current;
    setToasts((prev) => [...prev, { id, type, text }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 6000);
  }, []);

  const fetchPendencias = useCallback(async () => {
    try {
      const res = await fetch("/api/separacao/pendencias");
      if (!res.ok) return;
      const data: PendenciaResumo[] = await res.json();
      setPendencias(data);
      return data;
    } catch {
      return [];
    }
  }, []);

  useEffect(() => {
    fetchPendencias();
  }, [fetchPendencias]);

  // Lembrete periódico a cada 5 minutos
  useEffect(() => {
    timerRef.current = setInterval(async () => {
      const data = await fetchPendencias();
      if (data && data.length > 0) {
        addToast(
          "warning",
          `⚠ ${data.length} material(ais) ainda aguardando tratamento`
        );
      }
    }, REMINDER_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [fetchPendencias, addToast]);

  const handleTratar = async (pendenciaId: string, nomeItem: string) => {
    const res = await fetch(`/api/separacao/pendencia/${pendenciaId}/tratar`, {
      method: "PATCH",
    });
    if (!res.ok) return;
    const { todasTratadas } = await res.json();
    setPendencias((prev) => prev.filter((p) => p.id !== pendenciaId));
    addToast(
      "success",
      todasTratadas
        ? `✓ Todas as pendências de "${nomeItem}" tratadas — item liberado para reinício`
        : `✓ Material de "${nomeItem}" marcado como tratado`
    );
    onTratado?.();
  };

  const count = pendencias.length;

  return (
    <>
      {/* Banner persistente */}
      <AnimatePresence>
        {count > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mb-4 rounded-xl border border-red-700/50 bg-red-950/40 overflow-hidden"
          >
            <button
              onClick={() => setExpanded((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 text-left"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-sm font-semibold text-red-300">
                  {count} material(ais) pendente(s) aguardando tratamento
                </span>
              </div>
              <span className="text-red-400 text-xs">
                {expanded ? "▲ Fechar" : "▼ Ver todos"}
              </span>
            </button>

            <AnimatePresence>
              {expanded && showList && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 space-y-2">
                    {pendencias.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center justify-between gap-3 bg-red-900/20 border border-red-800/30 rounded-lg px-3 py-2"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold text-white">
                              {p.numeroObra}
                            </span>
                            <span className="text-xs px-1.5 py-0.5 rounded bg-gray-700 text-gray-300">
                              {p.kit === "KIT_3B" ? "Kit 3B" : "Kit 3K"}
                            </span>
                            <span className="text-xs text-gray-300 truncate">
                              {p.item.nome}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            <span className="text-xs text-red-400 font-mono">
                              {p.codigoMaterial}
                            </span>
                            <span className="text-xs text-gray-500">
                              qtd: {p.quantidade}
                            </span>
                            {p.observacao && (
                              <span className="text-xs text-gray-500 italic truncate">
                                {p.observacao}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => handleTratar(p.id, p.item.nome)}
                          className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white text-xs font-semibold transition-colors"
                        >
                          ✓ Tratar
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toasts */}
      <div className="fixed bottom-6 right-6 z-50 space-y-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              className={`pointer-events-auto max-w-sm px-4 py-3 rounded-xl shadow-xl text-sm font-medium ${
                t.type === "success"
                  ? "bg-green-900 border border-green-700 text-green-200"
                  : "bg-red-900 border border-red-700 text-red-200"
              }`}
            >
              {t.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
