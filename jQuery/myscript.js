$(function(){

    //menu
    $(".main > li").hover(function(){
        $(".sub").stop().show()
    }, function(){
        $(".sub").stop().hide()

    })//

    //slide img
    $(".fade li").eq(0).siblings().hide();
    var n = 0;
    setInterval(function(){
        $(".fade li").eq(n).fadeOut();
        if( n== 2){
            n=0;
        }else{
            n++;
        }
        $(".fade li").eq(n).fadeIn();

    },2500)



    
    //pop
    $(".pop").hide();
    $(".p_click").click(function(){
    $(".pop").show();
    })
    $(".close").click(function(){
    $(".pop").hide();
    })





})//jquery