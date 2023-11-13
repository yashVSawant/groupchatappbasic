const express = require('express');

const router = express.Router();

router.get('/login',(req,res,next)=>{
    res.send(`<form action="/chat" onSubmit="localStorage.setItem('username',document.getElementById('username').value)"><lable><input id="username" type="text" name="username"><button type="submit">Login</button></form>`);

})

module.exports = router;