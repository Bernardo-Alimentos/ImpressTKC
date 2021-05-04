<template>
    <div>
        <form @submit.prevent>
            <h2 class="centralizado">Cadastro de Pedidos</h2>

            <div class="containerPedidos">
                <fieldset>
                    <legend class="bold">Dados do pedido</legend>
                    <meu-fieldset v-for="n in range" v-bind:key="n">
                        <template v-slot:tonnerfilho>
                            <label for="tonnerid">Tonner:</label>
                            <select  v-model="selectOption[n]" id="lista">
                                <option v-for="tonner in tonners" v-bind:key="tonner._id" v-bind:value="tonner._id">{{tonner.modelo}}</option>
                            </select>
                        </template>

                        <template v-slot:quantidade>
                            <label for="quantidade">Quantidade:</label>
                            <input  type="number" id="quantidade" v-model="quantidadeArray[n]">
                        </template>

                        <template v-slot:valor>
                            <label for="valor">Valor unt</label>
                            <input  type="number" id="valor" v-model="valorArray[n]" >
                        </template>                           
                    </meu-fieldset>
                    <button @click="addform()">Adicionar tonner</button>
                    <button class="floating" type="submit" @click="arrayForInsert()">Enviar</button>
                </fieldset>
            </div>
        </form>

        <div>
            <meu-resmas :quantidadeResma="quantidadeResma" :valorResma="valorResma" />
        </div>


    </div>
</template>

<script>
import FieldsetPedido from './FieldsetPedido.vue';
import Tonner from '../../api/collections/tonner.js';
import Pedido from '../../api/collections/pedido.js';
import Resmas from './PedidosDeResmas.vue';
Meteor.subscribe('pedido');
Meteor.subscribe('tonner');


export default {
    data(){
        return{
            range: 1,
            selectOption: {},
            quantidadeArray: {},
            valorArray: {},
            quantidadeResma: "",
            valorResma: ""
        }
    },
    components:{
        'meu-fieldset': FieldsetPedido,
        'meu-resmas': Resmas
    },
    methods:{
        addform(){
            this.range+=1;
        },
        enviarPedido(){
            
        },
        arrayForInsert(){
            var forInsert= new Array;
            var vlrTotal=0;
            for (var i = 1; i <= this.range; i++){
                vlrTotal+=this.valorArray[i]*this.quantidadeArray[i];
                forInsert.push({
                    idTonner: this.selectOption[i],
                    quantidade: this.quantidadeArray[i],
                    valorUnt: this.valorArray[i]
                });
            }
            Meteor.call('inserePedido', forInsert, vlrTotal);
            alert("Pedido inserido");
        }
    },
    meteor: {
        tonners(){
            return Tonner.find({}).fetch();
        },
        pedidos(){
            return Pedido.find({}).fetch();
        }
    },
    computed:{
    }
    
}
</script>

<style >
.containerPedidos{
    margin-top: 5%;
}

.containerPedidos input{
    width: 45%;
    padding: 1em 10px;
    display: block;
    background-color: white;
    margin: 7px 0;
}
.containerPedidos select{
    display: block;
    margin: 7px;
}
.floating{
    float: right;
}
.containerPedidos button{
    padding: 10px;
}

</style>