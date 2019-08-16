const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const path = require('path');

const index_routes = require('./routes/index');
// const user_routes = require('./routes/user');
const api = require('./routes/api');



app.set('view engine','pug');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", index_routes);
app.use("/api", api);

app.listen(3000, ()=>console.log('server successfully started'));   
