import SimpleSchema from 'simpl-schema';
import {Mongo} from 'meteor/mongo';

const Impressora = new Mongo.Collection("impressora");


const asd = new SimpleSchema({
    nome: {
        type: String,
        optional: false
    },
    tonner: {
        type: String,
        optional: false
    },
    dataCadastro: {
        type: Date
    }
});

Impressora.attachSchema(asd);

export default Impressora;