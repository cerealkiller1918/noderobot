/**
 * Created by Justin on 07/12/17.
 */

var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
    //res.send("<h1>Hello World</h1>");
    res.render('index');
});

module.exports = router;