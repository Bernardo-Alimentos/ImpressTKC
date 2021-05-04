<template>
    <div class="cadastro">
        
        <table>
            <tr>
                <th>Modelo</th>
                <th>Fabricante</th>
                <th>Qtd</th>
            </tr>
            <tr v-for="tonner in tonners" v-bind:key="tonner._id" v-on:keydown.ctrl.delete="removeTonner(tonner._id)">
                <td><input type="text" v-model="tonner.modelo" v-on:keydown.alt.enter="alteraTonnerModelo(tonner), $event.target.blur()" v-on:keydown.enter.exact.capture.prevent.stop ></td>
                <td><input type="text" v-model="tonner.fabricante" v-on:keydown.alt.enter="alteraTonnerFabricante(tonner), $event.target.blur()" v-on:keydown.enter.exact.capture.prevent.stop></td>
                <td><input type="number" v-model="tonner.quantidade" @keydown.enter.exact.capture.prevent.stop></td>
            </tr>
        </table>
    </div>
</template>

<script>
import Tonner from '../../api/collections/tonner';

Meteor.subscribe('tonner');


export default {
    data(){
        return{

        }
    },
    methods:{
        removeTonner(id){
            Meteor.call('deletaTonner', id);
        },
        alteraTonnerModelo(tonner){
            if(!Meteor.call('alteraTonnerModelo', tonner._id, tonner.modelo)){
                alert('Modelo alterado com sucesso');
            } else alert('Dados inválidos');
        },
        alteraTonnerFabricante(tonner){
            if(!Meteor.call('alteraTonnerFabricante', tonner._id, tonner.fabricante)){
                alert('Fabricante alterado com sucesso');
            } else alert('Dados inválidos');
        }
    },
    meteor:{
        tonners(){
            return Tonner.find({}).fetch();
        }
    }
}
</script>

<style scoped>
table, th, td{
    border-collapse: collapse;
    border: 1px solid black;
    padding: 0.5em;
    font-size: 1.2em;
}
table{
    width: 100%;
}
input{
    width: 95%;
    border: hidden;
    background:none;
    text-align: center;
    font-size: 1em;
}
th {
    height: 50px;
    background-color: chartreuse;
    width: 50%;
}
tr:nth-child(even){
    background-color: lightgray;
}
td{
    user-select: none;
    padding: 10px;
}
</style>