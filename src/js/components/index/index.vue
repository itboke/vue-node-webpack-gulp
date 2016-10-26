

<template>
        <div>
            <topbanner></topbanner>
            <navigation v-bind:data="data"></navigation>
            <list></list>
            <div>{{data.nav}}</div>
            <img src={{pic}} />
            <img src={{pic2}} />
        </div>
</template>

<script>
    var imgs = require('../../../images/index/www.jpg');
    var imgs2 = require('../../../images/common/4444.jpg');
    import topbanner from './topBanner';
    import list from './list';
    import navigation from './navigation';
    export default{
        el:'#app',
        ready(){
            var _self = this;
            $.ajax({
                type:'GET',
                url:'http://localhost:8008/api/88',
                dataType:'json',
                success:function(result){
                    _self.data = result['nav'];
                },
                error:function(xhr,type){
                    //console.log(xhr);
                }
            })
        },
        data(){
            return {'data':'','pic':imgs,'pic2':imgs2};
        },
        components:{
            topbanner,
            list,
            navigation
        }
    }
</script>
