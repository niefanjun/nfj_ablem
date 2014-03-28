function nfj_hashchange(){
    var url = window.location.href;
    var page = url.substr(url.indexOf("/#") + 2)
    if(page == "upload")
    {
        var data = new FormData($('#uploadform')[0]);   
        $.ajax({
        url: "upload",
        type: "POST",
        data: data,
        catch: false,
        processData: false,  // 告诉jQuery不要去处理发送的数据
        contentType: false   // 告诉jQuery不要去设置Content-Type请求头
        });
    }
    
}
//need jquery