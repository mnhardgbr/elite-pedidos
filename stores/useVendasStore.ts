import { create } from 'zustand';

export type Venda = {
  id: string;
  categoria: string;
  valor: number;
  criadoEm: any;
};

interface VendasStore {
  vendas: Venda[];
  setVendas: (vendas: Venda[]) => void;
  addVenda: (venda: Venda) => void;
}

export const useVendasStore = create<VendasStore>((set) => ({
  vendas: [],
  setVendas: (vendas) => set({ vendas }),
  addVenda: (venda) => set((state) => ({ vendas: [...state.vendas, venda] })),
})); 