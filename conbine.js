var fs = require("fs");
function conbine(response,docName){
    //填写response句柄和要拼合的文件名，默认两个html和css的名字是一样的
    console.log("use conbine");
    fs.readFile("./"+docName+".html","utf-8",function(error,data){
       if(error){
            response.writeHead(404,{"Content-Type": "text/plain"});
            response.write("404 not found");
            response.end();
       }
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });
}
module.exports = conbine;