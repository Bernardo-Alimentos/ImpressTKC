<template>
    <div class="container">
        <h2 class="centralizado">Baixa de tonners</h2>
        <table>
            <tr>
                <th>Modelo</th>
                <th>Qtd</th>
                <th>Setor</th>
            </tr>
            <tr v-for="tonner in tonners" v-bind:key="tonner._id">
                <td>{{tonner.modelo}}</td>
                <td>{{tonner.quantidade}}</td>
                <td>
                    <select v-model="selected" id="listaSetor">
                    <option v-for="setor in setores" v-bind:key="setor._id" v-bind:value="setor._id">{{setor.nome}}</option>
                    </select>
                </td>
                <td><button @click="baixaTonner(tonner._id)">Baixa</button></td>
            </tr>
        </table>
        <div class="container baixa-resma">
            <h2 class="centralizado">Baixa em resma</h2>
            <table>
                <tr><th><label for="listaSetorResma">Setor que requisitou:</label></th>
                <th><select v-model="selectedResma" id="listaSetorResma">
                    <option v-for="setor in setores" v-bind:key="setor._id" v-bind:value="setor._id">{{setor.nome}}</option>
                </select></th>
                <th><button @click="baixaResma()" >Baixa</button></th></tr>
            </table>
        </div>
    </div>
</template>

<script>
import Tonner from '../../api/collections/tonner.js';
import Setor from '../../api/collections/setor.js';
import Resma from '../../api/collections/resma';

Meteor.subscribe('tonner');
Meteor.subscribe('setor');
Meteor.subscribe('resma');

export default {
    data(){
        return{
            selected: "",
            selectedResma: ""
        }
    },
    methods:{
        baixaTonner(idTonner){
            Meteor.call('insereBaixa', idTonner, this.selected);
            alert("Baixa concluída!");
        },
        baixaResma(){
            Meteor.call('insereBaixaEmResma', this.selectedResma);
            alert("Baixa concluída!");
        }
    },
    meteor:{
        tonners(){
            return Tonner.find({}).fetch();
        },
        setores(){
            return Setor.find({}).fetch();
        }
    }
}
</script>

<style scoped>
.container{
    margin: 2% 20%;
    padding: 1em 0;
}
.container label{
    font-weight: bold;
}
.baixa-resma{
    background-color: lightgray;
}
table, th, td{
    border-collapse: collapse;
    border: 1px solid black;
    padding: 0.5em;
    font-size: 1.2em;
}
table{
    width: 100%;
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