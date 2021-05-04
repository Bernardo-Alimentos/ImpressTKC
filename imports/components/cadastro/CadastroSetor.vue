<template>
    <div>
        <h2>Cadastro de setor</h2>
        <form @submit.prevent="">
            <fieldset>
                <legend>Dados do setor</legend>
                <label for="nomesetor">Nome do setor:</label>
                <input type="text" id="nomesetor" placeholder="Digite o nome do setor" v-model="qualSetor">
                <button type="submit" @click="envia">Enviar</button>
            </fieldset>
            
        </form>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
Meteor.subscribe('setor');


export default {
    data(){
        return{
            qualSetor: ""
        }
    },
    methods: {
        envia(event){
            Meteor.call('insereSetor', this.qualSetor);
            this.qualSetor= "";
            alert('Setor cadastrado com sucesso!');
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

.btn-block{
    display: block;
    float: right;
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