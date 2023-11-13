const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const loginRoute = require('./routes/login');
const chatRoute = require('./routes/chat');
const errorRoute = require('./routes/error');


app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoute);
app.use(chatRoute);
app.use(errorRoute);

app.listen(3000);

