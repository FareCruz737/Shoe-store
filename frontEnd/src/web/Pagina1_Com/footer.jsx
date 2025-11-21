import "../../css/footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <h2 className="logo-footer">Elegance</h2>
        <p className="footer-desc">Calidad y estilo en cada paso desde 2024</p>
      </div>

      <div className="footer-grid">
        <div className="footer-column">
          <h3>Comprar</h3>
          <a>Hombres</a>
          <a>Mujeres</a>
          <a>Ofertas</a>
          <a>Nuevos Ingresos</a>
        </div>

        <div className="footer-column">
          <h3>Ayuda</h3>
          <a>Contacto</a>
          <a>Envíos</a>
          <a>Devoluciones</a>
          <a>Guía de Tallas</a>
        </div>

        <div className="footer-column">
          <h3>Empresa</h3>
          <a>Sobre Nosotros</a>
          <a>Tiendas</a>
          <a>Sostenibilidad</a>
          <a>Trabaja con Nosotros</a>
        </div>
      </div>

      <p className="footer-copy">
        © 2025 Elegance Shoes. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
