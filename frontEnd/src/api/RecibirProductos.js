import { useEffect, useState } from "react";

export function Product_Api(url){

const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }

        const result = await response.json();
        
        // Asumiendo que result es un array, lo guardamos
        setData(result);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, [url]); // Se vuelve a ejecutar si la URL cambia

  // Exportamos los datos, el estado de carga y el error
  return { data, cargando, error };
};





