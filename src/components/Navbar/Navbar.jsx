import { CartWidget } from "../CartWidget/CartWidget"
import { Categorias } from "./Categorias/Categorias"
import { Secciones } from "./Secciones/Secciones"
//import logo from '../../Assets/img/logo.png';
export const Navbar = () => {

  return (
    <>
     <nav className={`navbar navbarColor navbar-expand-lg navbarColor`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      

          <Secciones/>
          <Categorias/>
      </ul>
      <CartWidget cantCarrito={10}/>
    </div>
  </div>
</nav>
   </>
  )
}