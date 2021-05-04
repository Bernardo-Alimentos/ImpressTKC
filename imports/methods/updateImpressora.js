import { Meteor } from 'meteor/meteor';
import Impressora from '../../server/collections/Impressora.js';

Meteor.methods({
    insereImpressora(name, idTonner){
        Impressora.insert({
            nome: name,
            tonner: idTonner,
            dataCadastro: new Date()
        });
    },
    deletaImpressora(id){
        Impressora.remove(id);
    },
    alteraNomeImpressora(id, impressoraNome){
        Impressora.update(
            {_id: id},
            {$set: {nome: impressoraNome}}
        );
        return;
    },
    alteraModeloTImpressora(id, modeloNovo){
        Impressora.update(
            {_id: id},
            {$set: {modeloT: modeloNovo}}
        );
        return;
    }
});
