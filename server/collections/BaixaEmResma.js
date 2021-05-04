import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const BaixaEmResma = new Mongo.Collection('baixaresma');

const schema = new SimpleSchema({
    setorReq:{
        type: String,
        optional: false
    },
    dataBaixa: {
        type: Date,
        optional: false
    }
});

BaixaEmResma.attachSchema(schema);

export default BaixaEmResma;