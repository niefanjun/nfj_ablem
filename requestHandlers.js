var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");
var ejs = require("ejs");
function start(response){
    console.log("start was called");
    response.writeHead(200, {"Content-Type": "text/html"});
    var names = fs.readdirSync('./pic');
    ejs.renderFile(__dirname+'/view/start.ejs',
    {names: names},
    function(error,result){
        if(!error){
            response.end(result);
        }
        else{
            response.end("error");
            console.log("start error");
        }
    });   
}
function upload(response,request){
    console.log("upload was called");
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files) {
        console.log("parsing done");
        var readStream = fs.createReadStream(files.upload.path);
        console.log(files.upload.name);
        var writeStream = fs.createWriteStream("./pic/"+files.upload.name);
        readStream.pipe(writeStream);
        readStream.on('end',function(){
            fs.unlinkSync(files.upload.path);
        });
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write('<meta http-equiv="refresh" content="0.1;url=/">');
        response.end();
    });
}
function show(response){
    console.log("show was called");
    //conbine(response,"show");
    response.writeHead(200, {"Content-Type": "text/html"});
    var names = fs.readdirSync('./pic');
    ejs.renderFile(__dirname+'/view/show.ejs',
    {names: names},
    function(error,result){
        if(!error){
            response.end(result);
        }
        else{
            response.end("error");
            console.log("show error");
        }
    });
}
exports.start = start;
exports.upload = upload;
exports.show = show;