import { Meteor } from 'meteor/meteor';
import BaixaEmTonner from '../../server/collections/BaixaEmTonner.js';
import Tonner from '../../server/collections/Tonner';

Meteor.methods({
    insereBaixa(idTonner, setor){
        BaixaEmTonner.insert({
            idTonner: idTonner,
            setorReq: setor,
            dataBaixa: new Date()
        });
        Tonner.update(
            {_id: idTonner},
            {$inc: {quantidade: -1}}
        );
    },
    getCountBaixa(id){
        var counted = BaixaEmTonner.find({setorReq: id});
        return counted.count();
    }

});