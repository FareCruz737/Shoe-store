import { color, motion } from "framer-motion";
import BarraPrincipal from "../Pagina1_Com/BarraPrinciipal";
import Footer from "../Pagina1_Com/footer";
import Descuentos from "../Pagina1_Com/descuentos";
import "../../css/shoeMan.css"

function Ofertas() {
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
        <h1 className="presentacion-title" >
          Las mejores ofertas
        </h1>
      </motion.div>
    </div>

<Descuentos
descuentos={true}
/>


<Footer/>
    </>
  );
}

export default  Ofertas; 