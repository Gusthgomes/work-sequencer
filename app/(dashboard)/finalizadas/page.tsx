"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Obra } from "@/app/store/obras";

export default function FinalizadasPage() {
  const [obras, setObras] = useState<Obra[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch_ = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/obras/finalizadas");
        const data = await res.json();
        setObras(data);
      } finally {
        setLoading(false);
      }
    };
    fetch_();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">✅ Obras Finalizadas</h1>
          <p className="text-gray-400 text-sm mt-1">
            {obras.length} obra{obras.length !== 1 ? "s" : ""} concluída{obras.length !== 1 ? "s" : ""}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : obras.length === 0 ? (
          <div className="text-center py-16 text-gray-600">
            <p className="text-4xl mb-4">🏆</p>
            <p>Nenhuma obra finalizada ainda</p>
          </div>
        ) : (
          <div className="space-y-4">
            {obras.map((obra) => (
              <motion.div
                key={obra.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-5 rounded-xl bg-gray-900 border border-blue-500/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <div>
                      <h3 className="font-bold text-white text-lg">{obra.numeroObra}</h3>
                      <p className="text-xs text-gray-400">
                        Finalizada em:{" "}
                        {new Date(obra.updatedAt).toLocaleString("pt-BR")}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                    Concluída
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {obra.carrinhos.map((c) => (
                    <div
                      key={c.id}
                      className="p-3 rounded-lg bg-gray-800/60 border border-gray-700"
                    >
                      <p className="text-sm font-semibold text-white mb-2">
                        {c.kit === "KIT_3B" ? "Kit 3B" : "Kit 3K"}
                      </p>
                      <div className="space-y-1">
                        {c.itens.map((item) => {
                          const tempoMs =
                            item.timerStart && item.timerEnd
                              ? new Date(item.timerEnd).getTime() - new Date(item.timerStart).getTime()
                              : null;
                          return (
                            <div key={item.id} className="flex items-center justify-between">
                              <span className="text-xs text-gray-300">{item.nome}</span>
                              <div className="flex items-center gap-2">
                                {tempoMs && (
                                  <span className="text-xs text-gray-500">
                                    {Math.round(tempoMs / 1000 / 60)}min
                                  </span>
                                )}
                                <span
                                  className={`text-xs px-1.5 py-0.5 rounded ${
                                    item.montagemStatus === "concluida"
                                      ? "bg-blue-900 text-blue-300"
                                      : "bg-red-900 text-red-300"
                                  }`}
                                >
                                  {item.montagemStatus === "concluida" ? "✓" : "✗"}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
