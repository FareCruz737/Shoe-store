import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./web/Regisster";
import Login from "./web/Login";

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={< Register/>} />      
        <Route path="/Login" element={< Login/>} /> 
      </Routes> 
</BrowserRouter>
  );
}

export default App;
