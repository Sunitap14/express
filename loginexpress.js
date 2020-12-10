var express=require("express"); //// 1. import express
var app=express();               ///2. create object express
var bodyparser=require("body-parser");
var m=require("./loginmodule");
         // post request  data gets stored in req.body num1=1&num2=12
		 // get request data gets stored in req.query num1=1&num2=12
		           
app.use(bodyparser.urlencoded({extended:false}));

var logger=function(req,resp,next){
	console.log(req);
	console.log(req.url);
	console.log(req.method);
	next();
}
var sayhello=(req,resp)=>{
	resp.sendFile("login.html",{root:__dirname});
	
}
var sayaboutus=function(req,resp){
	resp.end("about us");
	
}
var authenticate=function(req,resp){
	var ans=m.validateUser(req.body.nm,req.body.pass);
	if(ans){
		resp.sendFile("formdata.html",{root:__dirname});
	}
	else{
		resp.sendFile("login.html",{root:__dirname});
	}
	//resp.send("<h1>"+req.body.nm+"------"+req.body.pass+"</h1>");
	
}
var calculatedata=function(req,resp){
	  var ans=m.addition(req.query.num1,req.query.num2);
	  console.log(req.query.num1+"------"+req.query.num2);
	  resp.send("addition"+ans);
	
}


app.use(logger);

app.post("/login",authenticate);
app.get("/calc",calculatedata);
app.all("/about",sayaboutus);
app.use("/",sayhello);

app.listen(8181,()=>{
	
	console.log("server started")
})