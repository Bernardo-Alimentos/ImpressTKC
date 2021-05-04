<template>
    <div>
        <slot name="tonnerfilho"></slot>
        <slot name="quantidade"></slot>
        <slot name="valor"></slot>
    </div>
</template>

<script>


export default {
    data(){
        return{
        }
    },
    methods:{

    }
}
</script>

<style scoped>
.select-block{
    display: block;
    margin: 10px 0;
}
</style>