import { Link } from "react-router-dom"
export const Item = ({item}) => {

  return ( 
     <div className="card mb-3 cardProducto border-light">
        <img src={item.img} className="card-img-top" alt={`imagen de ${item.nombre}`} />
        <div className={` card-body cardbody` }>
            <h5 className="card-title">{item.nombre} </h5>
            <p className="card-text">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
            <Link className="nav-link" to={`/item/${item.id}`}><button className={`btn btn-success`}>Ver Producto</button></Link> 
        </div>
    </div>

  )
}