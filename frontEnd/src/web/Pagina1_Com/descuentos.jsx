import React from "react";
import "../../css/ManCollect.css";
import { Product_Api } from "../../api/RecibirProductos";

function Descuentos({descuentos}) {
const url = 'http://localhost:3000/Shoe/Productos'

const {cargando, error, data} = Product_Api(url)

if(cargando){
  return <h1>Cargando datos..</h1>
}
if (error) {
    return <h1>Error al cargar los datos: ❌ {error}</h1>;
  }

const bajas = data.filter(item => item.descuento === true);
  return (

    <div className="coleccion-container">
      {console.log(data)}
      <h1 className="h1">Ofertas limitadas</h1>
      <p className="subtitulo">
        Las mejores ofertas las tenemos aqui 
      </p>

      <div className="grid-productos">
        {bajas.map((item) => (
          <div key={item.id} className="card-producto">
            <div
              className="img-falsa"
              style={{ backgroundColor: "black" }}
            ></div>

            <div className="info-producto">
              <span className="tipo">{item.tipo}</span>
              <h2>{item.nombre}</h2>
              <p className="precio">${item.precio.toFixed(2)}</p>

              <button className="btn-carrito">Agregar al Carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Descuentos;
