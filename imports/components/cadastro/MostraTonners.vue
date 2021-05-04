<template>
    <div >
        {{tonnerName}}
    </div>
</template>

<script>
import Tonner from '../../api/collections/tonner';
Meteor.subscribe('tonner');


export default {
    props:
        [
        'tonner'
        ],
    data(){
        return {
            
        }
    },
    methods: {
        alteraModelo(){
            Meteor.call('alteraModeloTonner', this.tonner, this.tonnerName);
        }
    },
    meteor: {
        tonnerName(){
            return Tonner.findOne({_id: this.tonner}, {modelo: 1}).modelo;
        }
    }
}
</script>

<style scoped>
div{
    text-align: center;
    font-size: 1em;
}
</style>