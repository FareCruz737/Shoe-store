import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    gmail: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/Shoe/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    console.log("Respuesta del servidor:", data);

    // Si te devuelven un token:
    if (data.token) {
      console.log("Token recibido:", data.token);
      localStorage.setItem("token", data.token);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
