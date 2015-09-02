/*
 Zepto.progressbar.js
    272332472@qq.com
    2015/9/2
 */
(function($){
    //默认参数
    var defaults = {
        back_color:"#9BCD9B",//进度条背景颜色
        progress_bar_color:"yellow",//进度背景颜色
        progress_now:"80"//目前进度值
    }
    //扩展
    $.fn.progress_pie=function(options){
        //覆盖默认参数
        var opts = $.extend(defaults,options);
        $(this).html("<div class='left-pie'> <div class='left'></div> </div> <div class='right-pie'> <div class='right'></div> </div> <div class='mask'></div>");
        $(".left-pie").css("background",opts.progress_bar_color);
        $(".left").css("background",opts.back_color);
        $(".right-pie").css("background",opts.back_color);
        $(".right").css("background",opts.progress_bar_color);
        $(".mask").css("background",opts.back_color);
        var x =0;
        if(opts.progress_now<50||opts.progress_now==50){
            $(".left").css("transform","rotate("+opts.progress_now/100*360+"deg)");
        }else if(opts.progress_now>50&&opts.progress_now<100){
            $(".left").css("transform","rotate(180deg)");
            $(".right").css("transform","rotate("+opts.progress_now/100*360+"deg)");
        }
    }
})(Zepto);