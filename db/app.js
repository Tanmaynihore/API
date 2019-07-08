var mongoose=require('mongoose')
//connect to mongodb
mongoose.connect("mongodb1://localhost/Database",{usenewurlparser: true})
//insatll mongoose
// things we are going to insert 
var appSchema= new mongoose.Schema({
	name:String,
	age :Number,
	add:String,

})  

var Cat=mongoose.model('Cat',appSchema)//craeting model
Database.Cats.find()
Cats.create({

,function(err,cat){
	name:'raju',
	age=20,
	add= '215 adbajd'
	if(err){
		console.log("error")
	}	else{
		console.log("we add to the database ")
		console.log(Cat)
	}
}})
app.listen(4000,function(){
	cosole.log("server started")
})
//db.cats.find()
//model(model name ).create 
/*
function (err,cat),{
	name bla bla 
}

*/
