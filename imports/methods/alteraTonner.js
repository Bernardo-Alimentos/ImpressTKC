import { Meteor } from 'meteor/meteor';
import Tonner from '../../server/collections/Tonner.js';

Meteor.methods({
    insereTonner(modelo, fabricante){
        Tonner.insert({
            modelo: modelo,
            fabricante: fabricante,
            quantidade: 0,
            dataCriacao: new Date()
        });
    },
    deletaTonner(id){
        Tonner.remove(id);
    },
    alteraTonnerModelo(id, modelo){
            Tonner.update(
                {_id: id},
                {$set: {modelo: modelo}}
            );
            return true;
    },
    alteraTonnerFabricante(id, fabricante){
        Tonner.update(
            {_id: id},
            {$set: {fabricante: fabricante}}
        );
        return true;
    },
    alteraFabricanteTonner(id, fabricante){

    },
    getTonnerName(_id){
        const nome = Tonner.findOne({_id}, {modelo: 1});
        return nome;
    }
});
