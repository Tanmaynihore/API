var express = require('express')
var app = express()
app.get('/', function (req, res) {
  res.send("Hello World")
})
// app.get('/bye',function(req , res){

// 	res.send("byeeeeee")
// } )
// app.get('/hi',function(req,res){
// 	res.send("hiiiii")
// })
// app.get('/about/:home',function(req,res){

// 	res.send("Tanmay")
// 	console.log(req,params)
// })
// app.get('*',function(req,res){
// 	res.send("wrong page") 
// })
// app.listen(4000)

// task1 homepage/speak
// var name= require.params.name 
// tast2 pass num.hello/id 
//  id =3 print hello 3 times loop
app.get('/homepage/speak/:name',function(req,res)
{
// 	if (name == cat){
// 		res.send(" I  am cat")
// 		console.log(req,params)

// }  
// 		elif(name == dog){
// 			res.send("I am dog")
// 			console.log(req,params)

// }
// 			elif(name == cow){
			res.send("I am cow")
// 				console.log(req,params)

})
app.listen(4000)