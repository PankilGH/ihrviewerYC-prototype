var express = require('express');


var app = express();

var port = process.env.PORT || 3000;

app.use("/", express.static(__dirname));

app.listen(port, function(){
    console.log('Gulp is running my app on PORT: ' + port);
});