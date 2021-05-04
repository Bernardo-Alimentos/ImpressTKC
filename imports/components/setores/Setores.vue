<template>
    <div class="containerInsumos">
        <table>
            <tr>
                <th>Setor</th>
            </tr>
            <tr v-for="setor in setores" v-bind:key="setor._id" v-on:keydown.ctrl.delete="removeSetor(setor)" >
                <td><input type="text" v-model="setor.nome" v-on:keydown.alt.enter="alteraNome(setor), $event.target.blur()" v-on:keydown.enter.exact.capture.prevent.stop></td>
            </tr>
        </table>
    </div>
</template>

<script>
import Setor from '../../api/collections/setor.js';

Meteor.subscribe('setor');

export default {
    data(){
        return{

        }
    },
    methods:{
        removeSetor(setor){
            Meteor.call('removeSetor', setor._id);
            alert("Setor removido!");
        }

    },
    meteor:{
        setores(){
            return Setor.find({}).fetch();
        }
    }
}
</script>

<style scoped>



</style>