var bodyParser = require("body-parser")

var express = require('express')
var request  = require('request') //var for api request 
var app = express()
app.use(bodyParser.urlencoded({extended : true})); 
//checks the error and should be used always
app.set("view engine","ejs")


var movie_dict = [
		
		{ "name" : "star" ,
"Poster" : "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
		},
		{ "name" : "batman" ,
"Poster" : "https://m.media-amazon.com/images/M/MV5BYTdlODI0YTYtNjk5ZS00YzZjLTllZjktYmYzNWM4NmI5MmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
		},
		{ "name" : "avenger" ,
"Poster" : "https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg"
		},
		{ "name" : "uri" ,
"Poster" : "https://m.media-amazon.com/images/M/MV5BMWU4ZjNlNTQtOGE2MS00NDI0LWFlYjMtMmY3ZWVkMjJkNGRmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg"
		}
]


app.get('/home',function(req , res){
  	res.render("main") ;

})



app.get('/campground' ,function(req , res){
 	
 res.render("camp",{movie : movie_dict});
}) 



app.post('/campground',function(req,res){

  

  var MovieName = req.body.movie_name   ;
	var Url = req.body.url  ;

	var obj = {"name" : MovieName ,"Poster" : Url} ;
	movie_dict.push(obj) ;
	res.redirect("/campground") ;

})
app.get('/campground/new' , function(req , res){

	res.render("NewEntry") ;
})






app.get("/form_example" , function(req, res)
{
	res.render("form_example")
})

app.get('/form', function (req, res) { //callback function
  

   var movieName = req.query.movie_name ;
   //to fetch from ejs file
   var name2 = "http://www.omdbapi.com/?s=" + movieName + "&apikey=thewdb";

    request(name2,function(error,response,body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body) ;

			res.render("demo",{mydata : data})
//{ejs file attribute : js file attribute}			
		}
		// else if(error){
		// 	console.log("some error");
		// }
		// else{
		// 	console.log("something else")
		// }
	})


}) 


// dictionary example = printing values from the dictionary  




/*app.get("/form_example" , function(req, res)
{
	res.render("form_example")
})

app.get('/form', function (req, res) { //callback function
  
   var count = 0 ;
   var movieName = req.query.movie_name ;
   for(var i=0 ;i <movie_dict.length ; i++){
      if(movieName == movie_dict[i]["name"])
      {
        res.render("dictionary",{movie : movie_dict[i]["Poster"]});
        count = count+1 ;
      }
   }
   if(count==0){
   	res.send("Sorry the mentioned movie is not available in the list") ;
   }  
   //res.send(movieName);
   console.log(movieName) ;
})*/

//dictionary again but this time accepting values from the user too

app.get("/form_example" , function(req, res)
{
	res.render("form_example")
})

app.get('/form', function (req, res) { //callback function
  
   var count = 0 ;
   var movieName = req.query.movie_name ;
   for(var i=0 ;i <movie_dict.length ; i++){
      if(movieName == movie_dict[i]["name"])
      {
        res.render("dictionary",{movie : movie_dict[i]["Poster"]});
        count = count+1 ;
      }
   }
   if(count==0){
   		res.render("else") ;
   }  
   //res.send(movieName);
   console.log(movieName) ;
})

app.get('/elseform',function(req , res){

	res.send("hello world in elseform route");
	var MovieName = req.query.movie_name   ;
	var Url = req.query.url  ;

	var obj = {"name" : MovieName ,"Poster" : Url} ;
	movie_dict.push(obj) ;

	for(var i=0 ;i<movie_dict.length ; i++){
      if(movieName == movie_dict[i]["name"])
      {
        res.render("dictionary",{movie : movie_dict[i]["Poster"]});
        count = count+1 ;
      }
   }

   if(count==0)
   {
   		res.render("else") ;
   }  
   //res.send(movieName);
   console.log(movieName) ;


})

app.listen(4000,function(){
	console.log("server started");
})