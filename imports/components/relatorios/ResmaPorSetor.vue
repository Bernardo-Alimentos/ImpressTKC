<template>
    <div class="containerInsumos">
        <table>
            <tr>
                <th>Setor:</th>
                <th>Baixas:</th>
            </tr>
            <tr v-for="setor in setores" v-bind:key="setor._id">
                <td>{{setor.nome}}</td>
                <td>{{ getCountBaixaResma(setor._id) }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import BaixaEmResma from '../../api/collections/baixaEmResma'
import Setor from '../../api/collections/setor'

Meteor.subscribe('baixaresma')
Meteor.subscribe('setor')

export default {
    props:[
        'dataIn',
        'dataFim'
    ],
    data(){
        return{

        }
    },
    methods:{
        getCountBaixaResma(id){
            this.dataIn.setHours(00,00,00)
            this.dataFim.setHours(23,59,59)
            var cursor = BaixaEmResma.find({setorReq: id, dataBaixa: {$gte: this.dataIn, $lte: this.dataFim}});
            console.log(this.dataFim)
            return cursor.count();
        }
    },
    meteor:{
        baixas(){
            return BaixaEmResma.find({}).fetch()
        },
        setores(){
            return Setor.find({}).fetch()
        }
    }
    
}
</script>

<style scoped>

</style>