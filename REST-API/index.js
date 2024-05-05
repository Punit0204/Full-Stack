const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4();
const methodOverride = require("method-override");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("path", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


let posts = [
    {
        id: uuidv4(),
        username: "Punit",
        hobby: "Loves To Play Valorant",
    },
    { 
        id: uuidv4(),
        username: "Kapil",
        hobby: "In there free time like to spend time with thier horse name Methew",
    },
    {
        id: uuidv4(),
        username: "Kamla",
        hobby: "loves to watch neighbours drama.",
    },
    {
        id: uuidv4(),
        username: "Mukesh",
        hobby: "loves to splits vimal pan masala on road",
    },

];

app.get("/posts", (req, res)=> {
    res.render("index.ejs",{posts});
});
app.get("/posts/new", (req, res)=> {
    res.render("new.ejs");
});

app.post("/posts",  (req,res) => {
    let {username, hobby} =  req.body;
    let id = uuidv4();
    posts.push({id, username, hobby});
    res.redirect("/posts");
});

app.get("/posts/:id", (req ,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newHobby = req.body.hobby;
    let post = posts.find((p) => id === p.id);
    post.hobby = newHobby;
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post})

});

app.delete("/posts/:id", (req ,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, ()=>{
    console.log("Listning on port: 8080");
});