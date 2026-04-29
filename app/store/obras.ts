"use client";

import { create } from "zustand";

export interface PendenciaItem {
  id: string;
  codigoMaterial: string;
  quantidade: number;
  observacao?: string;
  tratado?: boolean;
  tratatoAt?: string;
}

export interface ItemSeparacao {
  id: string;
  nome: string;
  banca: string;
  status: "nao_iniciado" | "em_andamento" | "concluido" | "pendente";
  timerStart?: string;
  timerEnd?: string;
  montagemStatus?: string;
  montagemObservacao?: string;
  pendencias: PendenciaItem[];
}

export interface Carrinho {
  id: string;
  obraId: string;
  kit: "KIT_3B" | "KIT_3K";
  status:
    | "em_andamento"
    | "pendente"
    | "concluido"
    | "em_movimentacao"
    | "em_montagem"
    | "montagem_concluida"
    | "montagem_pendente";
  solicitado: boolean;
  recebido: boolean;
  itens: ItemSeparacao[];
}

export interface Obra {
  id: string;
  numeroObra: string;
  dataObra: string;
  statusGeral:
    | "pendente"
    | "em_andamento"
    | "separado"
    | "em_montagem"
    | "concluido";
  carrinhos: Carrinho[];
  createdAt: string;
  updatedAt: string;
}

interface ObrasStore {
  obras: Obra[];
  loading: boolean;
  setObras: (obras: Obra[]) => void;
  updateCarrinho: (carrinhoId: string, data: Partial<Carrinho>) => void;
  updateItem: (itemId: string, data: Partial<ItemSeparacao>) => void;
  setLoading: (v: boolean) => void;
}

export const useObrasStore = create<ObrasStore>((set) => ({
  obras: [],
  loading: false,
  setObras: (obras) => set({ obras }),
  setLoading: (loading) => set({ loading }),
  updateCarrinho: (carrinhoId, data) =>
    set((state) => ({
      obras: state.obras.map((o) => ({
        ...o,
        carrinhos: o.carrinhos.map((c) =>
          c.id === carrinhoId ? { ...c, ...data } : c
        ),
      })),
    })),
  updateItem: (itemId, data) =>
    set((state) => ({
      obras: state.obras.map((o) => ({
        ...o,
        carrinhos: o.carrinhos.map((c) => ({
          ...c,
          itens: c.itens.map((i) => (i.id === itemId ? { ...i, ...data } : i)),
        })),
      })),
    })),
}));
