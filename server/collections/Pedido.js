import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Pedido = new Mongo.Collection('pedido');
/*
schema = new SimpleSchema({
    info: {
        type: Array,
        optional: false
    },
    'info.$': {
        type: Object
    },
    dataPedido: {
        type: Date()
    }
});

Pedido.attachSchema(schema);
*/
export default Pedido;