<template>
    <div>
        <h1 class="titulo">Insumos disponíveis</h1>
<br>
        <div class="area-exib">
            <h2 class="titulo">Tonners</h2>
            <meu-listaTonners/>
        </div>

        <div class="area-exib">
            <h2 class="titulo">Resmas</h2>
            <meu-resmas/>
        </div>

        <div class="area-exib">
            <h2 class="titulo">Impressoras cadastradas</h2>
            <meu-impressoras/>
        </div>

        <div class="area-exib"> 
            <h2 class="titulo">Setores cadastrados</h2>
            <meu-setores/>
        </div>
    </div>
</template>

<script>
import Impressoras from '../impressoras/Impressoras.vue';
import ListaTonner from '../tonners/ListaTonner.vue';
import Setores from '../setores/Setores.vue';
import Resmas from './Resmas.vue';

export default {
    components:{
        'meu-impressoras': Impressoras,
        'meu-listaTonners': ListaTonner,
        'meu-setores': Setores,
        'meu-resmas': Resmas
    },
    data(){
        return {
            
        }
    },
    methods: {

    }
}
</script>

<style>
.titulo{
    text-align: center;
    display: block;
}
.area-exib{
    padding-bottom: 13px;
    background-color: white;
    margin: 20px 25%;
    
}

.containerInsumos table, .containerInsumos th, .containerInsumos td{
    border-collapse: collapse;
    border: 1px solid black;
    padding: 0.5em;
    font-size: 1.2em;
}
.containerInsumos table{
    width: 100%;
}
.containerInsumos input{
    width: 95%;
    border: hidden;
    background:none;
    text-align: center;
    font-size: 1em;
}
.containerInsumos th {
    height: 50px;
    background-color: chartreuse;
    width: 50%;
}
.containerInsumos tr:nth-child(even){
    background-color: lightgray;
}
.containerInsumos td{
    user-select: none;
    padding: 10px;
}
</style>