import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const BaixaTonner = new Mongo.Collection('baixatonner');

const schema = new SimpleSchema({
    idTonner: {
        type: String,
        optional: false
    },
    setorReq:{
        type: String,
        optional: false
    },
    dataBaixa: {
        type: Date,
        optional: false
    }
});

BaixaTonner.attachSchema(schema);

export default BaixaTonner;