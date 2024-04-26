const express = require("express");
const app = express();

// console.dir(app);

let port = 8080; //Can be 8080

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
});

// app.use((req,res) => {
//     console.log("Request Received");

//    let code = "<h1> Cars </h1> <ul> <li> BMW M5 Cs</li><li> GWagon </li> <li> Mercedes Benz  S Class </li></ul>";
//     res.send(code);
// });
app.get("/", (req, res) => {
     res.send("You contact Home page");
     });
app.get("/:username/:id", (req, res) => {
    let {username,id} = req.params;
    let htmlStr = `<h1>Welcome , To The Page of @${username}.</h1>`;
    res.send(htmlStr);
});
// app.get("/apple", (req, res) => {
//     res.send("You contact Apple page");
// });
// app.get("/orange", (req, res) => {
//     res.send("You contact Orange page");
// });

// // if we move to any other routes then above  function will execute.
// app.get("*", (req, res) => {
//     res.send("This Page  does not exist!");
// });

// app.post("/", (req, res) => {
//     res.send("You send a Post req");
// });


app.get("/search", (req ,res) => {
    let {q} = req.query;

    if(!q){
        res.send("This Query is not Exist");
    }
    res.send(`Search result for query :${q}`); 
});