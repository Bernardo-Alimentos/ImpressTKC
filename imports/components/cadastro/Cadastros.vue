<template>
    <div>
        <h1 class="centralizado">Cadastros</h1>
        
        <div class="area-form">
            <cadastro-tonner/>
        </div>
        <div class="area-form">
            <cadastro-impressora/>
        </div>
        <div class="area-form">
            <cadastro-setor/>
        </div>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import CadastroImpressora from './CadastroImpressora.vue';
import CadastroSetor from './CadastroSetor.vue';
import CadastroTonner from './CadastroTonner.vue';

export default {
    data(){

    },
    components:{
        'cadastro-impressora' : CadastroImpressora,
        'cadastro-setor': CadastroSetor,
        'cadastro-tonner': CadastroTonner
    }
}
</script>

<style scoped>
.centralizado {
    text-align: center;
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
option{
    width: 50%;
}
</style>