/**
 * Created by Justin on 07/12/17.
 */

var express = require('express');
var routes = express.Router();
var path = require('path');
var viewPath = path.join(__dirname, 'views');
var opts = require('./opts');
var nodeWebCam = require('node-webcam');

//routes
var index = require('./routes/index');


var app = express();

//var webCam = nodeWebCam.create(opts);
var opts = {
    callbackReturn: "base64"
};


app.set('views', viewPath);
app.set('view engine', 'pug');



app.use('/',index);
app.use('/test', routes.get('/', function (req,res,next){
    var image = "";
    var opts ={callbackReturn:"base64"};
    nodeWebCam.capture('test_picture', opts, function (err,data) {
        image += "<img src='"+data+"'>";
        console.log(image);
    });

   res.send(image)
}));





module.exports = app;