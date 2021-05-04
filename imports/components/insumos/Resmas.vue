<template>
    <div class="containerInsumos">
        <table>
            <tr>
                <th>Resmas:</th>
                <th>Qtd disponível</th>
            </tr>
            <tr v-for="resma in resmas" v-bind:key="resma._id">
                <td class="centralizado">Resmas:</td>
                <td><input type="text" v-model="resma.quantidade"></td>
            </tr>
        </table>
    </div>
</template>

<script>
import Resmas from '../../api/collections/resma.js';
Meteor.subscribe('resma');

export default {
    data(){
        return {
             
        }
    },

    meteor:{
        resmas(){
            return Resmas.find({}).fetch();
        }
    }
    
}
</script>

<style scoped>

</style>