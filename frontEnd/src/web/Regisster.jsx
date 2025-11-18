import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    gmail: "",
    password: "",
    age: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/Shoe/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    console.log("Respuesta del servidor:", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        onChange={handleChange} 
      />

      <input 
        type="text" 
        name="lastname" 
        placeholder="Lastname" 
        onChange={handleChange} 
      />

      <input 
        type="email" 
        name="gmail" 
        placeholder="Gmail" 
        onChange={handleChange} 
      />

      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        onChange={handleChange} 
      />

      <input 
        type="number" 
        name="age" 
        placeholder="Age" 
        onChange={handleChange} 
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
