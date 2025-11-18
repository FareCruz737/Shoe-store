const express = require('express')
const Productos = require('../data/Data_Things.js')

let inicio = express.Router()

inicio.get('/Productos', (res, req) => {

res.send(Productos)


})