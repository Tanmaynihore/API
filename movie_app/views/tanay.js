var express=require("express")
var app=express()
var request= require("request")

app.set("view engine","ejs") 




app.get('/result',function(req , res){
		var movie_name=req.query.movie_name;
	  var mov = "http://www.omdbapi.com/?s=" + movie_name + "&apikey=thewdb" ;
	request(mov, function(error,response,body){
		if(!error && response.statusCode==200){
			var data=JSON.parse(body);
			res.render("web.ejs",{data:data})
		} 
	})
})


app.listen(4000 , function(req,res){
console.log("server started")

	)}