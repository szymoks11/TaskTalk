const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())


// Route for creating the post
app.post('/api/create', (req,res)=> {

    const email = req.body.email;
    const password = req.body.password;
    
    db.query("INSERT INTO TaskTalk (email, password) VALUES (?,?)",[email,password], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
    });   })