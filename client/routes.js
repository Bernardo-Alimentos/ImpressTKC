import Insumos from '../imports/components/insumos/Insumos.vue';
import Cadastros from '../imports/components/cadastro/Cadastros.vue';
import PedidosBaixas from '../imports/components/pedidos-baixas/PedidosBaixas.vue'
import Relatorios from '../imports/components/relatorios/Relatorios.vue';

export const routes = [
    {
        _id: 1,
        path: "",
        name: "Insumos",
        component: Insumos
    },
    {
        _id: 2,
        path: "/cadastros",
        name: "Cadastros",
        component: Cadastros
    },
    {
        _id: 3,
        path: "/pedidos-e-baixas",
        name: "Pedidos e Baixas",
        component: PedidosBaixas
    },
    {
        _id: 4,
        path: "/relatorios",
        name: "Relatórios",
        component: Relatorios
    }
];

