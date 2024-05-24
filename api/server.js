const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;
const cors = require('cors');
var app = express();
console.log("server is working");
//Login Auth
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const createStartegy = require('passport-local').Strategy;
//file reading
var fs = require('fs');
var path = require('path');
const multer = require('multer');

//Database initialization
const mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://arnav:Arnav1417@cluster0.wkhwuh1.mongodb.net/Blogging'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 
app.listen(port, function () {
    console.log("Server is listening at port:" + port);
});
app.use(cors());
// Parses the text as url encoded data
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    if ('OPTIONS' == req.method) {
       res.sendStatus(200);
     }
     else {
       next();
     }});

app.use(session({
  secret:"this is so tediious",
  resave:false,
  saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

const userschema = new mongoose.Schema({ 
  email: {type: String }, 
  password: {type:Number} 
}); 
userschema.plugin(passportLocalMongoose); 
const User=new mongoose.model("users",userschema);
// passport.use(User.createStartegy());
// passport.use(new localstrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));

// passport.use(new localstrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
    res.send("HEllO");
  });

// app.post('/login',async function(req,res){
//     try {
//         // check if the user exists
//         const user = await db.collection('Login').findOne({ username: req.body.email });
//         if(req.isAuthenticated()){
//           res.send("Already Authenticated!!");
//         }
//     } catch (error) {
//         res.status(400).json({ error });
//       }
// })
// app.post("/login", async function (req, res) { 
  // console.log(req.body); 
  // const userToBeChecked = new User({ 
      // username: req.body.email, 
      // password: req.body.password 
  // }); 
//  const user = await db.collection('Login').findOne({user:req.body.email});
  // Checking if user if correct or not 
  // if(user){
    // req.login(userToBeChecked, function (err) { 
      // if (err) { 
          // console.log(err); 
          // res.redirect("http://localhost:3000/signup"); 
      // } 
      // else { 
        // const result = req.body.password === user.password;
        // if (result) {
          // res.render("http://localhost:3000");
        // } else {
          // res.status(400).json({ error: "password doesn't match" });
        // }
        //   passport.authenticate("local") 
              // // (req, res,function () { 
              // // User.find({ email: req.user.email }, 
              //     // function (err, docs) { 
                  //   // if (err) { 
                    // //    console.log(err); 
                  //   // } 
                  // //  else { 
                  //   //  //login is successful 
                  //   //  console.log("credentials are correct"); 
                  // //  res.send("login successful"); 
                  // //     } 
          //         // }); 
      //     // }); 
      // } 
  // }) 
  // }
  // else{
    // res.redirect("http://localhost:3000/signup");
    // window.alert("User not found please Signup!!");
  // }
// })


app.post("/login", async function(req,res){
   try {
        // check if the user exists
        const user = await db.collection('Login').findOne({ email: req.body.email });
        if (user) {
          //check if password matches
        var pword = user.password;
          const result = req.body.password === pword;
          if (result) {
            res.redirect("http://localhost:3000");
          } else {
            res.redirect("http://localhost:3000/login");
            res.status(400).json({ error: "password doesn't match"});
          }
        } else {
          res.redirect("http://localhost:3000/signup");
          res.status(400).json({error:"User does not exist"});
        }
      } catch (error) {
        res.status(400).json({ error });
      }
})

app.post('/users',cors(),function(req,res){
    var Name = req.body.name; 
    var Email =req.body.email; 
    var Pass = req.body.password; 
  
    var data = { 
        "name": Name, 
        "email":Email, 
        "password":Pass, 
    } 
db.collection('Login').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
          
    return res.redirect('http://localhost:3000/login'); 
})
app.get("/imgdata", function(req,res){
  res.send("why");
})

app.post("/write",function(req,res){
  var Title = req.body.title;
  var Markdown = req.body.markdown;
  var image = req.body.image;
  res.send("Hello");
})
const upload = multer({ dest: './public/data/uploads/' })
app.post("/imgdata",upload.single('image'),function(req,res){
  console.log("Got something!!");
  // res.send(req.file.path);
  var Title = req.body.title;
  var Markdown = req.body.markdown;
  // var image = req.body.image;
  var data = { 
    // "email":Email,
    "title":Title,
    "markdown":Markdown
} 
db.collection('writestorage').insertOne(data,function(err, collection){ 
    if (err) throw err; 
    console.log("Record inserted Successfully"); 
          
}); 
      
return res.redirect('http://localhost:3000'); 
})


async function finddata() {
  try {
      // const dataset = await client.db('Ecommerce').collection('shoes').find().toArray();
      const dataset = await db.collection('writestorage').find().toArray();
      return JSON.stringify(dataset);
  }
  catch {
      console.log("db closed");
      await client.close();
  }
}

app.get("/data",async function(req,res){
    try {
        res.writeHead(200, {'Content-Type':'application/json'});
        const dataset = await finddata(); // here we get the string json
        res.write(dataset); // whoever requests will get the string json as response
        console.log("sent");
        // console.log(dataset);
    }
    finally {
        res.end(); // must end response. DONT FOGET
    }
})