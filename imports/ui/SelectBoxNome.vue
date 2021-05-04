<template>
    <div>
        <select v-model="selected" id="listaSetor">
        <option v-for="n in algumaCoisa" v-bind:key="n._id" v-bind:value="n._id">{{n.nome}}</option>
        </select>
    </div>
</template>

<script>
export default {
    props:{
        
    },
    data(){

    }
}
</script>