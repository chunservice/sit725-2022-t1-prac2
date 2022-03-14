// using Express
var express = require('express');

// create an app express
var app = express();

// default path to the index.html in the public folder
app.use(express.static(__dirname + '/public'));

// set port = 3030
var port = 3030;

app.listen(port);
console.log("Server listening on: "+port);

// write a function adding two numbers
const addtwonum = function(n1,n2)
{
    return n1+n2;
}

// call this function
console.log(addtwonum (10,14));

// to get the function on server side, using REST API
app.get ("/addtwonum", function(req,res){

    // define constant n1 and n2
    const n1=parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result= addtwonum (n1,n2);
    res.send('The summation result is: '+result);
}) 