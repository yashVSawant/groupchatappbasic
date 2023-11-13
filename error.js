const express = require('express');

const router = express.Router();

router.use((req,res,next)=>{
    res.send('<h1>Error 404 : page not found !</h1>');
})

module.exports = router;