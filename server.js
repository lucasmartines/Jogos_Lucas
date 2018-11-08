const express = require('express')
const app = express()

app.use( express.static('public') )

const port = process.env.PORT || 3000;

app.get('*', function(req, res){
  res.sendFile( __dirname + '/public/404.html' )
});

app.listen( port , ()=>{
	console.log("servidor rodando")

} )

var http = require("http");

setInterval(function() 
{
	try{
    http.get("https://redmoonstudio.herokuapp.com");
	}
	catch( err ){
		console.log(err);
	}
}, 6000); // every 5 minutes (300000)1000*60