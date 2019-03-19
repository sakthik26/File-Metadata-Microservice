'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');
var fs = require("fs");
var path = require("path");
var fileUpload = require('express-fileupload');
// require and use "multer"...

var app = express();
app.use(fileUpload());
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


app.post('/api/fileanalyse', (req, res) => {
  console.log(req.files)
   if(!req.files.upfile.data)
        res.status(400).send('No files were uploaded.');
    else
        res.send({ 'size': Buffer.byteLength(req.files.upfile.data) });
});


app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
