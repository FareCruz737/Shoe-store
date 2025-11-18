const express = require('express');
const productos = require('../data/Data_Things.js');
const shoppingcar = express.Router();

// Carrito almacenado en memoria
  const car = [] 

// Mostrar productos
shoppingcar.get('/products', (req, res) => {   
  res.send(productos);
});

// Mostrar carrito
shoppingcar.get('/ShowCar', (req, res) => {
    res.send(car);
});

// Agregar al carrito
shoppingcar.post('/addcar', (req, res) => {
  const { id, cantidad } = req.body;

 
  // Buscar producto existente
  const find_shoe = productos.find(prod => prod.id == id);

  if (!find_shoe) {
    return res.status(404).send("Sorry, this product doesn't exist");
  }

  // Verificar si ya está en el carrito
  const itemInCart = car.find(item => item.id == id);

  if (itemInCart) {
    // Si ya está, aumentar cantidad
    find_shoe.cantidad += cantidad;
  } else {
    // Si no está, agregarlo al carrito
    car.push({ ...find_shoe.marca, cantidad});
  }
 
  // Guardar carrito en cookie
  res.cookie('cart', car, { httpOnly: true });
  res.send(car);
});

module.exports = shoppingcar;
