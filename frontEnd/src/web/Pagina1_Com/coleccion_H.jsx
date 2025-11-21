import React from "react";
import "../../css/ManCollect.css";

function HombresCollection() {
  const productos = [
    {
      id: 1,
      tipo: "FORMAL",
      nombre: "Oxford Clásico",
      precio: 129.99,
      colorBox: "#c2c2c2",
    },
    {
      id: 2,
      tipo: "CASUAL",
      nombre: "Sneakers Urbanos",
      precio: 89.99,
      colorBox: "#d9d9d9",
    },
    {
      id: 3,
      tipo: "BOTAS",
      nombre: "Botas de Cuero",
      precio: 159.99,
      colorBox: "#b08b63",
    },
    {
      id: 4,
      tipo: "CASUAL",
      nombre: "Mocasines Premium",
      precio: 119.99,
      colorBox: "#a67c52",
    },
  ];

  return (
    <div className="coleccion-container">
      <h1>Colección Hombres</h1>
      <p className="subtitulo">
        Zapatos diseñados para el hombre moderno que valora la calidad y el estilo
      </p>

      <div className="grid-productos">
        {productos.map((item) => (
          <div key={item.id} className="card-producto">
            <div
              className="img-falsa"
              style={{ backgroundColor: item.colorBox }}
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

export default HombresCollection;
