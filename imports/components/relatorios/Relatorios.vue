<template>
    <div class="containerRelatorios">
        <h1 class="centralizado">Página de relatórios</h1>

        <div class="date-picker">
            <label for="dataInicio">Encontrar baixas de: </label>
            <input type="date" id="dataInicio" v-model="dataIn" @change="dataInObj()">
            <label for="dataFim"> à: </label>
            <input type="date" id="dataFim" v-model="dataFim" @change="dataFimObj()">
        </div>

        <div>
            <!-- aqui vai os relatórios de uso de tonner por setor -->
            <h2 class="centralizado">Uso de tonners por setor:</h2>
            <meu-tonerPorSetor :dataIn="dataInObj()" :dataFim="dataFimObj()"/>
        </div>

        <div>
            <!-- aqui vai os relatórios de uso de resmas por setor -->
            <h2>Uso de resmas por setor</h2>
            <meu-resmaPorSetor :dataIn="dataInObj()" :dataFim="dataFimObj()"/>
        </div>
    </div>
</template>

<script>
import TonnerPorSetor from './TonnerPorSetor';
import ResmaPorSetor from './ResmaPorSetor'


export default {
    components: {
        'meu-tonerPorSetor': TonnerPorSetor,
        'meu-resmaPorSetor': ResmaPorSetor,
    },
    data(){
        return{
            dataIn: new Date(),
            dataFim: new Date()
        }
    },
    methods:{
        dataInObj(){
            return new Date(this.dataIn + " EDT")
        },
        dataFimObj(){
            return new Date(this.dataFim + " EDT")
        }

    }
}
</script>

<style>
.containerRelatorios div{
    margin: 10px 20%;
}
.containerRelatorios h2{
    text-align: center;
}

.date-picker{
    font-size: 1.2em;
    text-align: center;
    background-color: lightgray;
    padding: 15px 0;
}
</style>