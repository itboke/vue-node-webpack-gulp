<script>

    new Vue({
        el: '#tabs',
        data:{
            isShow:0,//显示
            isHide:0, //隐藏
            text:'firend'
        },
        methods: {
            userShow: function (arg) {
                if(this.isShow == arg){
                    this.isShow = 0;
                }else{
                    this.isShow = arg;
                }
            },
            //切换选项卡
            tabSwitch:function(text){
                this.text = text;
            },
            //弹出聊天窗口
            pop:function(){
                jsLib.plugin.layer.open({
                    content: '<div> \
                                <div class="chat-head"> \
                                    <div class="inner"> \
                                        <div class="avator"> \
                                            <img src="http://img.gming.org/img/tongyi/gm_xxk_dzj.jpg"/> \
                                        </div>\
                                        <div class="avator"> \
                                            <p>小小猫</p><p>我是一只美丽的小笨猫</p> \
                                        </div>\
                                    </div>\
                                </div> \
                                <div class="chat-body"> \
                                    <div class="chat-news"></div> \
                                    <div class="chat-input"> \
                                        <textarea></textarea> \
                                    </div> \
                                    <div class="chat-btn"><strong>发送</strong></div>\
                                </div> \
                             </div>',
                    time: 3600,
                    //shade: false,
                    className:'window-chat'
                });
            }
        }
    })
</script>
