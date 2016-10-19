
<template>
        <div>
            <topbanner></topbanner>
            <navigation></navigation>
            <list></list>
            <img src="../../../images/360.png"/>
        </div>
</template>

<script>
    import topbanner from './topBanner';
    import list from './list';
    import navigation from './hello';
    export default{
        el:'#app',
        data(){
            return {
                name:"hello,vue.xxxxxxxxx.7777gsg."
            }
        },
        components:{
            topbanner,
            list,
            navigation
        }
    }
</script>
