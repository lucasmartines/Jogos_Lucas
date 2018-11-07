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