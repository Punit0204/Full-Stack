const express = require("express");

const app =  express();
const path = require("path");
const port = 8080;

app.set("view engine", "ejs");
app.set("views",path.join( __dirname, "/views"));

app.get("/", (req,res) => {
    res.render("home");
});

app.get("/ig/:username", (req,res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    if(data){
        res.render("instagram" ,{data});
        
    }else{
        res.render("error");
    }
//     let follower = ["Adam","Krutika","Chameli","manglu","Silla"];
//     let {username}  = req.params;
//    res.render("instagram", {username,follower});

});

app.get("/home", (req,res) => {
    res.send("Welcome Home");
});

app.get("/roll_dice", (req,res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1
    res.render("roll_dice", {diceValue});
});


app.listen(port,() => {
    console.log(`Running on port: ${port} `);
});