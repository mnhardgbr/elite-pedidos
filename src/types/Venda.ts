export interface ItemPedido {
  produto: {
    id: number;
    nome: string;
    preco: number;
    tipovenda: string;
    peso?: number;
  };
  quantidade: number;
}

export interface Venda {
  id: string;
  categoria?: string;
  valor?: number;
  criadoEm?: any;
  data?: string;
  itens?: ItemPedido[];
  total?: number;
  formaPagamento?: string;
  status?: 'CONCLUIDO' | 'CANCELADO';
} 