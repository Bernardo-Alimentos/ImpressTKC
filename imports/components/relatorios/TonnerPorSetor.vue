<template>
    <div class="containerInsumos">
        <table>
            <tr>
                <th>Setor:</th>
                <th>Baixas:</th>
            </tr>
            <tr v-for="setor in setores" v-bind:key="setor._id">
                <td>{{setor.nome}}</td>
                <td>{{ getCount(setor._id) }}</td>
            </tr>
        </table>

    </div>
</template>



<script>
import BaixaEmTonner from '../../api/collections/baixaEmTonner';
import Setor from '../../api/collections/setor';

Meteor.subscribe('baixa');
Meteor.subscribe('setor');




export default {
    props: [
        'dataIn',
        'dataFim'
    ],
    data(){
        return {
            
        }
    },
    computed:{
    },
    meteor:{
        baixas(){
            return BaixaEmTonner.find({}).fetch();
        },
        setores(){
            return Setor.find({}).fetch();
        }
    },
    methods:{
        getCount(id){
            this.dataIn.setHours(00,00,00)
            this.dataFim.setHours(23,59,59)
            var cursor = BaixaEmTonner.find({setorReq: id, dataBaixa: {$gte: this.dataIn, $lte: this.dataFim}});
            return cursor.count();
        }

    }
}
</script>

<style scoped>

</style>