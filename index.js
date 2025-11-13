console.clear();
// Delete all the console logs before running the code

let login = require('./data/login');
let shoppingcar = require('./data/shoppingcar.js');
let cors = require('cors');
let express = require('express');
let cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// 

require('dotenv').config();

const app = express();
//Use cookies 
app.use(cookieParser());
app.use(cors());
// app.use(bodyParser())


// Implementation of middlewares 
Port = process.env.PORT || 4000;
app.use(express.json());

// Implementation of routes
app.use('/Shoe', login);
app.use('/Shoe', shoppingcar);


app.listen(Port, () => {
    console.log(`Servidor escuchando en el puerto ${Port}`);
});
