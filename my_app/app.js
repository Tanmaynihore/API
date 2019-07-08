var express=require("express")
var app=express()
app.use(express.static("public"));
app.set("view engine","ejs")

app.get('/',function(req,res){
	res.send("hello word");
})

app.get('/bye/:name',function(req,res){
	var name=req.params.name
	res.render("tanay.ejs",{ thingVar : name })
})
// app.get('/author',function(req,res){
// 	res.render("author.ejs",{ author : name })
// })
// 	var name=req.params.name
app.get('/author',function(req,res){
	var author=[
	{
		author:"tanay",book:"Satun"
	},
		{
			author:"raj",book:"lucifer"
		}]
	res.render("author.ejs",{ name : author })
})
app.get('/app/:na',function(req,res){
	var na={
		if (name =='cat')
		{
			console.log(" I am a cat")
		}
		elif(name == 'dog')
		{
			console.log(" I am a dog")
		}
		elif(name== 'rat')
		{
			console.log(" I am a rat")
		}
		else{
			console.log("wrong person")
		}
	}
})
console.log("Server_Started")
app.listen(4000)
	