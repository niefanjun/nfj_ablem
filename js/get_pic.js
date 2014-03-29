var pic_data;
var pic_i = 0;
var img = new Image();
function nfj_get_pic(){
    $.ajax({
        url:"show",
        type:"GET",
        success:function(data){
            pic_data = data;
            alert(pic_data.var[0]);
            nfj_load_pic();
            
        }
    });
}
function nfj_load_pic(){
    //$("#masonry").empty();
    
    var $container = $('#masonry');
    for(var i = 0;i<5&&pic_data.var[pic_i];i++){
        $box = $("<div class='box'><img src='pic/"+pic_data.var[pic_i]+"'></div>");
        $container.append($box).masonry().masonry('appended',$box,false);
        $box.imagesLoaded( function() {
            $container.masonry({
              itemSelector: '.box',
              gutterWidth: 20,
              isAnimated: true,
            });
        });
        pic_i++;
    }
    
    alert(pic_i);
    //nfj_hide_pic();
    //用于对页面调用瀑布流布局
    //$container.masonry().masonry("reload");
}
function nfj_show_pic(){
    $(".boxhide").addClass('box').removeClass('boxhide');
}
function nfj_hide_pic(){
    $(".box").addClass('boxhide').removeClass('box');
}