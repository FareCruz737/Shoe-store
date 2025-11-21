import { useState } from "react";
import BarraPrincipal from "./Pagina1_Com/BarraPrinciipal";
import Main from "./Pagina1_Com/main";
import HombresCollection from "./Pagina1_Com/coleccion_H";
import Footer from "./Pagina1_Com/footer";
import '../css/Pagina1.css';

function ShoeShopping() {
return(
  <>
  <BarraPrincipal/>
  <Main/>
  <HombresCollection/>
  <Footer/>
  </>
)
}

export default ShoeShopping;
