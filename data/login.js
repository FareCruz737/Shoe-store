let express = require('express');
let users = require("./Users");
const cypto = require('crypto');
const bcrypt = require('bcrypt');

const login = express.Router();


// where the users registration data will be stored

login.post('/register', async (req, res) => {
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
    age,
  };

    users.push(newUser);

  res.json({ message: 'Usuario registrado exitosamente.' });
});

// Ruta de login
login.post('/login', async (req, res) => {
  const { gmail, password } = req.body;

  const user = users.find(u => u.gmail === gmail);
  const isMatch = await bcrypt.compare(password, user.password);

  if (!user || !isMatch) {
    return res.status(400).json({ message: 'Los datos son incorrectos' });
  }
  res.json({ message: `Bienvenido ${user.name} ${user.lastname}!` });
});


module.exports = login;