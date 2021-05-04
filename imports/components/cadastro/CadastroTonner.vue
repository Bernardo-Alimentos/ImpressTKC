<template>
    <div>
        <h2>Cadastro de tonner</h2>

        <form @submit.prevent>
            <fieldset>
                <legend>Informações do tonner</legend>

                <label for="modelo">Modelo:</label>
                <input id="modelo" type="text" placeholder="Informe o modelo" v-model="qualTonner">
                <label for="fabricante">Fabricante:</label>
                <input id="fabricante" type="text" placeholder="Informe o fabricante" v-model="qualFabricante">
                <button type="submit" @click="enviaTonner">Enviar</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';

export default {
    data(){
        return{
            qualTonner: "",
            qualFabricante: ""
        }
    },
    methods: {
        enviaTonner(){
            Meteor.call('insereTonner', this.qualTonner, this.qualFabricante);
            this.qualTonner= "";
            this.qualFabricante= "";
            alert("Tonner inserido com sucesso!");
        }
    }
    
}
</script>

<style scoped>
input{
    
    width: 45%;
    padding: 1em 10px;
    display: block;
    background-color: white;
}


label:not(:first-child){
    display: block;
    margin-top: 15px;
}
legend{
    font-weight: bold;
}
button{
    padding: 1em;
    margin: 20px 0 5px 30px;
    float: right;
}
option{
    width: 50%;
}
</style>