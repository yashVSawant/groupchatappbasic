const express = require('express');

const router = express.Router();
const getChatsController = require('../controller/chats');

 router.get('/chat',getChatsController.getChats)


router.post('/chat',getChatsController.postChats)


module.exports = router;
