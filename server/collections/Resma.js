import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Resma = new Mongo.Collection('resma');

var schema = new SimpleSchema({
    quantidade: {
        type: Number,
        optional: false
    }
});

Resma.attachSchema(schema);

export default Resma;