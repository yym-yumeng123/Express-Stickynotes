/**
 * Created by yym on 2017/11/24.
 */

//自定义事件 订阅
var EventCenter = (function(){
    var events = {};

    function on(evt,handler){
        events[evt] = events[evt] || [];

        events[evt].push({
            handler: handler
        });
    }

    function fire(evt,args){
        if (!event[evt]){
            return;
        }
        for (var i= 0;i<events[evt].length;i++){
            events[evt][i].handler(args);
        }
    }

    return {
        on: on ,
        fire: fire
    }
})()

module.exports = EventCenter;

// EventCenter.on('text-chnage',function(data){
//     console.log(data)
// })