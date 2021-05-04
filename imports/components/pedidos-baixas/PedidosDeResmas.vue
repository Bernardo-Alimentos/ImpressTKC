<template>
    <div class="containerPedidos">
        <form @submit.prevent>
            <fieldset>
                <legend class="bold">Pedido de resmas</legend>
                <label for="quantidade">Qtd:</label>
                <input required type="number" id="quantidadeResma" v-model="quantidadeResma">

                <label for="valor">Valor Unt.:</label>
                <input required type="number" id="valorResma" v-model="valorResma">

                <button class="floating" type="submit" @click="enviarPedidoResma()">Enviar</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            quantidadeResma: "",
            valorResma: ""
        }
    },
    methods:{
        enviarPedidoResma(){
            Meteor.call('inserePedidoResmas', this.quantidadeResma, this.valorResma);
            alert("Pedido enviado!");
        }
    }
    
}
</script>

<style scoped>

</style>