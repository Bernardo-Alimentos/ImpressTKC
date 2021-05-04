<template>
    <div className="principal">
        <div class="menuNav">
            <meu-navBar :rotas="routes"/>
        </div>
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Selecao from '../components/selecao/Selecao';
import { routes } from '../../client/routes';
import { Meteor } from 'meteor/meteor';



export default {
    components: {
        'meu-navBar': Selecao
    },
    data(){
        return {
            routes
        }
    }    
}
</script>

<style>
.slide-leave-active, .slide-enter-active{
  transition: 80ms;
}

.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to{
  transform: translateX(-100%);
}
.menuNav{
    display: block;
}
.centralizado{
    text-align: center;
}

.area-form{
    background-color: lightgray;
    padding: 5px;
    margin: 15px 20%;
}
.input-form{
    width: 45%;
    padding: 1em 10px;
    display: block;
    background-color: white;
}
.btn-block{
    display: block;
    padding: 1em;
    margin: 20px 0 5px 30px;
    float: right;
}
.bold{
    font-weight: bold;
}
</style>