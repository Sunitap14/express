var fs=require("fs");
var users=[{name:"user1",pass:"pass1"},{name:"user2",pass:"pass2"},{name:"user3",pass:"pass3"}];

exports.validateUser=(u,p)=>{
    for(var i=0;i<users.length;i++){
	    if((u==users[i].name)&&(p==users[i].pass)){
		   return true;
		}
	}
	return false;
}
exports.saveData=function(ob){
	fs.writeFile("data.txt",JSON.stringify(ob),function(err,data){
		if(err){
			
		}else{
		 console.log("data saved");
		}
	})
	
}

exports.addition=function(a,b){
	return parseInt(a)+parseInt(b);
	
}





