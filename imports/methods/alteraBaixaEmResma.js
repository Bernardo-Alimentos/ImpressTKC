import { Meteor } from 'meteor/meteor';
import BaixaEmResma from '../../server/collections/BaixaEmResma';
import Resma from '../../server/collections/Resma'

Meteor.methods({
    insereBaixaEmResma(setor){
        BaixaEmResma.insert({
            setorReq: setor,
            dataBaixa: Date()
        });
        Resma.update(
            {_id: 1},
            {$inc: {quantidade: -1}}
        );
    },
    getCountBaixaResma(idSetor){
        var counted = BaixaEmResma.find({"setorReq": idSetor});
        return counted.count();
    }

});