const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())


// Route to get one post
app.get("/api/getFromId/:id", (req,res)=>{

const email = req.params.email;
const password = req.params.password;
 db.query("SELECT * FROM TaskTalk WHERE email = ? and password = ?", email, password,
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });
