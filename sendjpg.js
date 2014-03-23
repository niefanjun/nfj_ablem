var fs = require("fs");
function sendjpg(response,docName){
    console.log("use sendjpg");
    fs.readFile("."+docName,"binary",function(error,data){
       if(error){
            response.writeHead(404,{"Content-Type": "text/plain"});
            response.write("404 not found");
            response.end();
       }
        response.writeHead(200,{"Content-Type": "image/jpg"});
        response.write(data,"binary");
        response.end();
    });
}
module.exports = sendjpg;