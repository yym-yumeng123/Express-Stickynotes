/**
 * Created by yym on 2017/11/24.
 */

//提醒组件

require("less/toast.less");

// var $ = require('jquery')

function toast(message, time){
    //信息
    this.message = message;
    //延迟时间
    this.dismissTime = time||1000;
    this.createNode();
    this.showToast();
}

toast.prototype = {
    //创建节点
    createNode: function(){
        var html = "<div class = 'toast'>" + this.message + "</div>";
        this.$toast = $(html);
        $('body').append(this.$toast);
    },
    //展示节点
    showToast: function(){
        var _this = this;
        this.$toast.fadeIn(400, function(){
            setTimeout(function(){
                _this.$toast.fadeOut(400, function(){
                    _this.$toast.remove();
                })
            }, _this.dismissTime)
        });
    }
}

function Toast(message, time){
    return new toast(message, time);
}
//暴露接口
window.Toast = Toast
module.exports.Toast = Toast;