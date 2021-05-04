<template>
    <div class="containerInsumos">
        <table>
            <tr>
                <th>Impressora</th>
                <th>Tonner</th>
            </tr>
            <tr v-for="impressora in impressoras" v-bind:key="impressora._id" v-on:keydown.ctrl.delete="removeImpressora(impressora)" >
                <td><input class="texto" type="text" v-model="impressora.nome" v-on:keydown.alt.enter="alteraNome(impressora), $event.target.blur()" v-on:keydown.enter.exact.capture.prevent.stop></td>
                <td><meu-mostratonners :tonner="impressora.tonner"/></td>
            </tr>
        </table>
    </div>
</template>

<script>
import Impressora from '../../api/collections/impressora.js';
import Tonner from '../../api/collections/tonner.js';
import MostraTonners from '../cadastro/MostraTonners';

Meteor.subscribe('impressora');
Meteor.subscribe('tonner');


export default {
    components:{
        'meu-mostratonners':MostraTonners
    },
    data(){
        return {
            
        }
    },
    methods: {
        removeImpressora(impressora){
            Meteor.call('deletaImpressora', impressora._id);
        },
        alteraNome(impressora){
           if(!Meteor.call('alteraNomeImpressora', impressora._id, impressora.nome)){
            alert("Impressora alterada com sucesso");

           } else alert ("Dados inválidos");
        }
    },
    meteor:{
        impressoras(){
            return Impressora.find({}).fetch();
        },
        tonners(){
            return Tonner.find({}).fetch();
        }
    },
    computed:{
        
    }
}
</script>

<style scoped>
.hidden {
    display: none;
}
.not-select{
    user-select: none;
}
.texto{
    font-size: 1em;
}
</style>