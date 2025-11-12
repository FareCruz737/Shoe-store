console.clear();
// Delete all the console logs before running the code

require('dotenv').config();
express = require('express');
const app = express();


Port = process.env.PORT || 4000;

// Esquema base de carrito de compras; 




app.listen(Port, () => {
    console.log(`Servidor escuchando en el puerto ${Port}`);
});
