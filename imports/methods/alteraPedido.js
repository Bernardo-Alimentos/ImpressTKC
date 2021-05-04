import { Meteor } from 'meteor/meteor';
import Pedido from '../../server/collections/Pedido.js';
import Tonner from '../../server/collections/Tonner.js';
import Resma from "../../server/collections/Resma.js";

Meteor.methods({
    inserePedido(array, vlrTotal){
        Pedido.insert({
            info: array,
            vlrTotal: vlrTotal,
            dataPedido: new Date
        });
        for (var i = 0; i <= array.length; i++){
            Tonner.update(
                {_id: array[i].idTonner},
                {$inc: {quantidade: array[i].quantidade}}
            );
        }
    },
    inserePedidoResmas(qtd, valor){
        Pedido.insert({
            valorResmas: valor,
            dataPedido: new Date()
        });
        Resma.upsert(
            {_id: 1},
            {$inc: {quantidade: qtd}}
        );
    }
});