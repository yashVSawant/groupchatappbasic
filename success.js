const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const successController = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
}

module.exports = successController;
