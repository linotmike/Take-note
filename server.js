const express = require('express')
const app = express()
const path = require('path')
const PORT = 3001;

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const allRoutes = require("./controllers");
// app.use(allRoutes)

app.get("/hello", (req,res) =>{
    res.send("hello")
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
app.listen(PORT,()=>{
    console.log("listening on port " + PORT)
})