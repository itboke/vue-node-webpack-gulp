<script>

    import './test.vue';
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
                                    <div class="chat-news"> \
                                        <ul> \
                                            <li class="me"><div>梧桐&nbsp;&nbsp;14:44</div><div>你好</div></li>\
                                            <li class="other"><div>小小猫&nbsp;&nbsp;14:44</div><div>你好</div></li>\
                                        </ul> \
                                    </div> \
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
                this.connect();
            },
            connect:function(){
                var ws = io.connect('http://localhost:8880/');
                var _userId = $('#menu').attr('data-id');
                // ws.on('connect',function(){
                //     //当连接的时候把个人的用户唯一标示发送给服务器
                //     ws.emit('join',_userId);
                // })
                // //发送消息
                // var sendMsg = function(){
                //     var _msg = 'hello';
                //     //ws.emit('s_getMsg',_msg,_userId,002);
                // };
                // //打开某个好友的对话框的时候建立链接
                // ws.emit('s_firend',_userId,002);
                //sendMsg();
            }
        }
    })
</script>
