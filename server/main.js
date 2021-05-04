import { Meteor } from 'meteor/meteor';

import Impressora from './collections/Impressora.js';
import '../imports/methods/updateImpressora';

import Setor from './collections/Setor.js';
import '../imports/methods/insereSetor';

import Tonner from './collections/Tonner';
import '../imports/methods/alteraTonner';

import Pedido from './collections/Pedido.js';
import '../imports/methods/alteraPedido.js';

import '../imports/methods/alteraBaixaEmTonner.js';
import BaixaTonner from './collections/BaixaEmTonner.js';

import Resma from './collections/Resma';
import '../imports/methods/alteraBaixaEmResma';
import BaixaEmResma from './collections/BaixaEmResma'


Meteor.startup(() => {
    Meteor.publish('impressora', function(){
        return Impressora.find({});
    });
    Meteor.publish('setor', function(){
        return Setor.find({});
    });
    Meteor.publish('tonner', function(){
        return Tonner.find({});
    });
    Meteor.publish('pedido', function(){
        return Pedido.find({});
    });
    Meteor.publish('baixa', function(){
        return BaixaTonner.find({});
    });
    Meteor.publish('resma', function(){
        return Resma.find({});
    })
    Meteor.publish('baixaresma', function(){
        return BaixaEmResma.find({})
    })
});
