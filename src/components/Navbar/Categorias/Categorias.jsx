import { Link } from "react-router-dom"
import React from "react"

export const Categorias = React.memo(() => {
 
  let categorias = [
    {
      nombre: "fruta",
      id: 1
    },
    {
      nombre: "verdura",
      id: 2
    },
    {
      nombre: "otros",
      id: 3
    },
  ] 
  return (
    <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <button className="btn btn-dark">Categorias</button>
         </a>
         <ul className="dropdown-menu">
           <li><Link className="dropdown-item" to={'/category/1'}>Frutas</Link></li>
           <li><Link className="dropdown-item" to={'/category/2'}>Verduras</Link></li>
           <li><Link className="dropdown-item" to={'/category/3'}>Otros</Link></li>
         </ul>
   </li>
 )
}
)