<template>
    <div>
        <nav>
            <ul class= "meu-nav">
            <li v-for="route in rotas" v-bind:key="route._id">
                <router-link :to="route.path ? route.path : '/'" class="linksNav">{{route.name}}</router-link>
            </li>
            </ul>    
        </nav>    
    </div>    
</template>

<script>
export default {
    props: {
        rotas:{
            required: true,
            type: Array
        }
    }
}
</script>

<style scoped>
.meu-nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
.meu-nav li{
    display: inline;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    border-style: solid;
    border-width: 0 1px 0 0;
    float: left;
    text-align: center;
}
.meu-nav li .linksNav{
    padding: 8px;
    margin: 4px;
    text-decoration: none;
    color: black;
}
.meu-nav li:first-child{
    border-style: solid;
    border-width: 0 1px;
}
</style>