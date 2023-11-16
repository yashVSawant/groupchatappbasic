const path = require('path');

const rootDir = require('../util/path');

const loginPage = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','login.html'))
}

module.exports = loginPage;