<template>
    <div>
        <h2>Cadastro de impressora</h2>
        <form @submit.prevent>
            <fieldset>
                <legend>Dados da impressora</legend>

                <label for="nome">Nome:</label>
                <input id="nome" ref="nomeInput" type="text" placeholder="Digite o nome da impressora" v-model="novaImpressora"  />
                <div class="margem">
                    <label  class="unico" for="modeloT">Modelo do tonner:</label>
                    <select v-model="selected" id="listaTonners">
                        <option v-for="tonner in tonners" v-bind:key="tonner._id" v-bind:value="tonner._id">{{tonner.modelo}}</option>
                    </select>
                </div>
                <button type="submit" @click="inserirImpressora()">Enviar</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import Tonner from '../../api/collections/tonner';

Meteor.subscribe('impressora');
Meteor.subscribe('tonner');

export default {
    data(){
        return {
            novaImpressora: "",
            selected: ""
        }
    },
    methods:{
        inserirImpressora(){
            Meteor.call("insereImpressora", this.novaImpressora, this.selected);
            this.novaImpressora="";
            alert('Impressora cadastrada com sucesso!');
            this.$refs.nomeInput.focus();
        }
    },
    meteor: {
        tonners(){
            return Tonner.find({}).fetch();
        }
    }
}
</script>

<style scoped>
select option{
    min-width: 90%;
}
.unico{
    display: inline;
}
.margem{
    margin-top: 20px;
}
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
</style>