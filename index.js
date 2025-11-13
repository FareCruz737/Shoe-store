console.clear();
// Delete all the console logs before running the code

let login = require('./data/login');
// 

require('dotenv').config();
express = require('express');
const app = express();
// Implementation of middlewares 

Port = process.env.PORT || 4000;
app.use(express.json());
// Implementation of routes

app.use('/Shoe', login);


app.listen(Port, () => {
    console.log(`Servidor escuchando en el puerto ${Port}`);
});
