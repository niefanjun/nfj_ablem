function nfj_get_pic(){
    $.ajax({
        url:"show",
        type:"GET",
        success:function(data){
            $("#masonry").empty();
            for(var i = 0;data.var[i];i++){
                $('#masonry').append("<div class='box'><img src='pic/"+data.var[i]+"'></div>");
            }
            var $container = $('#masonry');
            $container.imagesLoaded(function() {
              $container.masonry({
                itemSelector: '.box',
                gutterWidth: 20,
                isAnimated: false,
              });
            });//用于对页面调用瀑布流布局
            $container.masonry().masonry("reload");
        }
    });
}
