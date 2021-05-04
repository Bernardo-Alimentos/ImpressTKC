<template>
    <div>
        <div class="area-form">
            <!-- pedidos aqui -->
            <meu-pedido/>
        </div>
        <div>

            <!-- baixas de tonner aqui -->
            <meu-baixas/>
        </div>
    </div>
</template>

<script>
import Pedido from './Pedidos.vue';
import Baixas from './Baixas.vue';

export default {
    data(){
        return{

        }
    },
    components: {
        'meu-pedido': Pedido,
        'meu-baixas': Baixas
    }
    
}
</script>

<style>

</style>