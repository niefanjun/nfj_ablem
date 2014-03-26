function arrayBufferToBlob(buffer, opt_contentType) {
    var uInt8Array;
    uInt8Array = new Uint8Array(buffer);
    return new Blob([uInt8Array], (opt_contentType ? {
        type: opt_contentType
    } : {}));
}

function nfj_hashchange(){
    var url = window.location.href;
    var page = url.substr(url.indexOf("/#") + 2)
    if(page == "upload")
    {
        /*
        var data = new FormData();
        jQuery.each($('#uploadfile')[0].files, function(i, file) {
            data.append('file-'+i, file);
        });
*/
        var data = new FormData($('#uploadform')[0]);
        //var data = new FormData();
        
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