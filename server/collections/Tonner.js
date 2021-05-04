import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Tonner = new Mongo.Collection('tonner');

const schema = new SimpleSchema({
    modelo: {
        type: String,
        optional: false
    },
    fabricante: {
        type: String,
        optional: false
    },
    quantidade:{
        type: Number,
        optional: true
    },
    dataCriacao: {
        type: Date()
    }
});

Tonner.attachSchema(schema);

export default Tonner;
