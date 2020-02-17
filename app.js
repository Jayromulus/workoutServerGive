require("dotenv").config();
var express = require("express");
var app = express();
var test = require("./controllers/testcontroller");
var authTest = require("./controllers/authtestcontroller");
var sequelize = require("./db");
var bodyParser = require("body-parser");

var user = require("./controllers/usercontroller");

sequelize.sync();
app.use(bodyParser.json());

app.use(require("./middleware/header"));

// app.get('/', function(request, response){
// response.send("Hello World")
// })

//one more comment

// app.use('/api/test', function(req,res){

// res.send("This is data from the api/test endpoint")
// })

app.use("/api/user", user);
app.use("/test-controller", test);

app.use(require("./middleware/validate-session"));

app.use("/authtest", authTest);

app.listen(process.env.PORT, function() {
  console.log(`app is listening on ${process.env.PORT} and hello world`);
});
