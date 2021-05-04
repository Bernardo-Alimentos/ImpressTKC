import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Setor = new Mongo.Collection('setor');

const schema = new SimpleSchema({
    nome: {
        type: String,
        optional: false
    },
    dataCriacao: {
        type: Date()
    }
});

Setor.attachSchema(schema);

export default Setor;
