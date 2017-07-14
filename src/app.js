/**
 * Created by Justin on 07/12/17.
 */

var express = require('express');
var routes = express.Router();
var path = require('path');
var viewPath = path.join(__dirname, 'views');
var nodeWebCam = require('node-webcam');

//routes
var index = require('./routes/index');


var app = express();



app.set('views', viewPath);
app.set('view engine', 'pug');



app.use('/',index);
app.use('/test', routes.get('/', function (req,res,next){
    var image = "";
    var FSWebcam = nodeWebCam.FSWebcam;
    var opts = {};
    var cam = new FSWebcam(opts);

   res.send(image)
}));





module.exports = app;