// using Express
var express = require('express');

// create a variable called app app = express
var app = express();

// default path of hosting to the public folder
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
// response is what we see from the user, response is what we send back to the user
app.get ("/addtwonum", function(req,res){

    // define constant n1 and n2, parse Integer if user input string, that will be an error as integer is required
    const n1=parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result= addtwonum (n1,n2);
    // res.json({statusCode: 200, data: result, message:"Success"})
    res.send('The summation result is: '+result);
}) 