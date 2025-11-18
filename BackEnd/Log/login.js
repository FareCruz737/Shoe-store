let express = require('express');
let users = require("../data/Users");
const cypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = express.Router();
const SECRET = process.env.Password_Secret;
// where the users registration data will be stored

login.post('/Register', async (req, res) => {
  const { name, lastname, gmail, password, age } = req.body;

  if (!name || !lastname || !gmail || !password || !age) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  if (!gmail.endsWith('@gmail.com')) {
    return res.status(400).json({ message: 'Debe usar un correo @gmail.com.' });
  }


  const existingUser = users.find(u => u.gmail === gmail);

  if (existingUser) {
    return res.status(400).json({ message: 'Este correo ya está registrado.' });
  }


  const hashedPassword = await bcrypt.hash(password, 10);
  const id = cypto.randomBytes(16).toString("hex");

  const newUser = { 
    id: id,
    name,
    lastname,
    gmail,
    password: hashedPassword,
    age
  };

    users.push(newUser);
    // const token = jwt.sign({ id: id, gmail: gmail}, SECRET, { expiresIn: '1h' }); 

res.send('Se a registrado el usaurio', users)
});



// Ruta de login
login.post('/Login_for_register', async (req, res) => { 
  const { gmail, password } = req.body;

  const user = users.find((u) => u.gmail === gmail);
  if (!user) {
    return res.status(400).json({ msg: "Correo o contraseña incorrectos" });
  }

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    return res.status(400).json({ msg: "Correo o contraseña incorrectos" });
  }

  // Crear token
  const token = jwt.sign(
    {
      id: user.id,
      gmail: user.gmail,
    },
    SECRET,
    { expiresIn: "2h" }
  );

  res.json({ msg: "Bienvenido", token });
});


module.exports = login; 