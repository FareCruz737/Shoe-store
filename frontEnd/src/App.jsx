import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./web/Regisster";
import Login from "./web/Login";
import ShoeShopping from "./web/paginaPrincipal";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/Pagina1" element={< ShoeShopping/>} />   
        <Route path="/" element={< Register/>} />      
        <Route path="/Login" element={< Login/>} /> 
      </Routes> 
</BrowserRouter>
  );
}

export default App;
