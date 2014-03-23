var fs = require("fs");
function sendcss(response,docName){
    console.log("use sendcss");
    fs.readFile("./css"+docName,"utf-8",function(error,data){
       if(error){
            response.writeHead(404,{"Content-Type": "text/plain"});
            response.write("404 not found");
            response.end();
       }
        response.writeHead(200,{"Content-Type": "text/css"});
        response.write(data);
        response.end();
    });
}
module.exports = sendcss;