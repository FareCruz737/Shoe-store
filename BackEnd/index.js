console.clear();
// Delete all the console logs before running the code

let login = require('./Log/login');
// 

require('dotenv').config();
let express = require('express');
const cors = require('cors'); 
const app = express();
// Implementation of middlewares 

Port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors())
// Implementation of routes

app.use('/Shoe', login);


app.listen(Port, () => {
    console.log(`Servidor escuchando en el puerto ${Port}`);
});
