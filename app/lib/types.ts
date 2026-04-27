export type Role = "ADMIN" | "DALG" | "DPRO";
export type Kit = "KIT_3B" | "KIT_3K";

export type StatusCarrinho =
  | "em_andamento"
  | "pendente"
  | "concluido"
  | "em_movimentacao"
  | "em_montagem"
  | "montagem_concluida"
  | "montagem_pendente";

export type StatusItem =
  | "nao_iniciado"
  | "em_andamento"
  | "concluido"
  | "pendente";

export type StatusGeral =
  | "pendente"
  | "em_andamento"
  | "separado"
  | "em_montagem"
  | "concluido";

export interface StatusCarrinhoColor {
  bg: string;
  text: string;
  label: string;
  hex: string;
}

export const STATUS_CARRINHO_COLORS: Record<StatusCarrinho, StatusCarrinhoColor> = {
  em_andamento: {
    bg: "bg-yellow-400",
    text: "text-yellow-900",
    label: "Em Andamento",
    hex: "#FACC15",
  },
  pendente: {
    bg: "bg-red-500",
    text: "text-white",
    label: "Pendente",
    hex: "#EF4444",
  },
  concluido: {
    bg: "bg-green-500",
    text: "text-white",
    label: "Separação Concluída",
    hex: "#22C55E",
  },
  em_movimentacao: {
    bg: "bg-orange-500",
    text: "text-white",
    label: "Em Movimentação",
    hex: "#F97316",
  },
  em_montagem: {
    bg: "bg-gray-500",
    text: "text-white",
    label: "Em Montagem",
    hex: "#6B7280",
  },
  montagem_concluida: {
    bg: "bg-blue-500",
    text: "text-white",
    label: "Montagem Concluída",
    hex: "#3B82F6",
  },
  montagem_pendente: {
    bg: "bg-purple-500",
    text: "text-white",
    label: "Montagem Pendente",
    hex: "#A855F7",
  },
};

export const ITENS_KIT: Record<Kit, Array<{ nome: string; banca: string }>> = {
  KIT_3B: [{ nome: "QC", banca: "BAME-21" }],
  KIT_3K: [
    { nome: "COP-001", banca: "BAME-22" },
    { nome: "CTB-001", banca: "BAME-23" },
    { nome: "BOT/IND", banca: "BAME-24" },
    { nome: "20%", banca: "BAME-20%" },
  ],
};
