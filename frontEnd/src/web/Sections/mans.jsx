import { color, motion } from "framer-motion";
import BarraPrincipal from "../Pagina1_Com/BarraPrinciipal";
import HombresCollection from "../Pagina1_Com/coleccion_H";
import Footer from "../Pagina1_Com/footer";
import "../../css/shoeMan.css"

function PresentacionZapatos() {
  return (
<>
<BarraPrincipal/>
    <div className="presentacion-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="presentacion-box"
      >
        <h1 className="presentacion-title" style={{color:"#53EAFD"}}>
          Los mejores zapatos a la moda
        </h1>
        <p className="presentacion-subtitle">Para los hombres</p>
      </motion.div>
    </div>
    <HombresCollection 
Genero= "Hombre"
/>

<Footer/>
    </>
  );
}

export default PresentacionZapatos; 