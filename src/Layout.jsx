import { Outlet, Link } from "react-router-dom";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/acercadenosotros">Acerca De Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;