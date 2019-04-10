exports = mongoose = require('mongoose');
const CONFIG = require("../config").DB_CONFIG;
if(CONFIG.hasOwnProperty(process.env.ENV)){
	mongoose.connect(CONFIG[process.env.ENV],{useCreateIndex: true,useNewUrlParser: true},function(err){
	    if(err){
			console.log("Error in connecting "+process.env.ENV+" database : ",err);
			process.exit(0);
	    }else{
	        console.log(process.env.ENV + " Database connected");
	    }
	});
}else{
	console.log(process.env.ENV,"Env not supported"); process.exit(0);
}
exports = Schema = mongoose.Schema;
