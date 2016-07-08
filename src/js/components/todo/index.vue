
<style lang="less">
    h1{
        background-color: red;
    }
</style>

<template>
        <div>
            <h1>{{name}}</h1>
            <list>
        </div>
</template>

<script>
    import list from './list';
    export default{
        el:'#app',
        data(){
            return {
                name:"hello,world,!!!!!"
            }
        },
        components:{list}
    }
</script>