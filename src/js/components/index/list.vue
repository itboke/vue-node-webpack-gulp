<!--
    渲染一个列表
-->
<template>
    <div id="example-list">
        <ul>
            <li v-for="item in items">{{item.mes}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        el:'#example-list',
        data(){
            return {
                items:[
                    {mes:'hello'},
                    {mes:'Vue'},
                    {mes:'learssssssssssning'}
                ]
            }
        }
    }
</script>
