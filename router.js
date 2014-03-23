var sendcss = require("./sendcss");
var sendjs = require("./sendjs");
var sendjpg = require("./sendjpg");
var sendpng = require("./sendpng");
function route(handle,pathname,response,request){
    var decodepathname =decodeURI(pathname);
    console.log("About to route a request for"+decodepathname);
    if(decodepathname.match(".css")){
        console.log("a css");
        sendcss(response,decodepathname);
    }
    else if(decodepathname.match(".js")){
        console.log("a js");
        sendjs(response,decodepathname);
    }
    else if(decodepathname.match(".jpg")){
        console.log("a jpg");
        sendjpg(response,decodepathname);
    }
    else if(decodepathname.match(".png")){
        console.log("a png");
        sendpng(response,decodepathname);
    }
    else if (typeof handle[decodepathname] === 'function') {
        handle[decodepathname](response,request);
    }
    else{
        console.log("no "+decodepathname);
        response.writeHead(404,{"Content-Type": "text/plain"});
        response.write("404 not found");
        response.end();
    }
}
exports.route = route;
