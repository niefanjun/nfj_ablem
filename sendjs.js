var fs = require("fs");
function sendjs(response,docName){
    console.log("use sendjs");
    fs.readFile("./js"+docName,"utf-8",function(error,data){
       if(error){
            response.writeHead(404,{"Content-Type": "text/plain"});
            response.write("404 not found");
            response.end();
       }
        response.writeHead(200,{"Content-Type": "text/javascript"});
        response.write(data);
        response.end();
    });
}
module.exports = sendjs;