const path = require('path');
const fs = require('fs');

const rootDir = require('../util/path');

exports.getChats = (req,res,next)=>{
    
    const read = fs.readFile('message.txt',(err,data)=>{
        if(err){
            data = 'chat s empty';
        }
        res.send(`${data}<form action="/chat" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')"><input type="text" name="message"><input id="username" type="hidden" name="username"><button type="submit">send</button></form>`)
    });
    
}

exports.postChats = (req,res,next)=>{
    const username = req.body.username;
    const msg = req.body.message;
    const MsgText = `${username} : ${msg}`;
    fs.appendFile('message.txt',MsgText,err=>{
        if(err){
            res.redirect('/error')
        }
        res.redirect('/chat')
    });

}

