const express = require("express");
const path = require("path");
const app = express();



app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use('/js',express.static(path.join(__dirname,'public/javascripts')));
app.use('/css',express.static(path.join(__dirname,'public/stylesheets')));
//Routes
const routes = require("./routes");


//URL Routing
app.get('/',routes.home);
app.get('/sw.js',(req,res)=>{
	res.sendFile(path.resolve(__dirname,"public","sw"));
});
app.get('/timeline',routes.timeline);
app.get('*',routes.notFound);




app.listen(2000,function(){
	console.log("Server started at 2000...");
});