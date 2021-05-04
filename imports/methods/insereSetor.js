import { Meteor } from 'meteor/meteor';
import Setor from '../../server/collections/Setor';

Meteor.methods({
    insereSetor(nomesetor){
        Setor.insert({
            nome: nomesetor,
            dataCriacao: new Date()
        });
    },
    removeSetor(id){
        Setor.remove(id);
    },
    getNomeSetor(id){
        return Setor.findOne({_id: id}, {nome});
    }
});