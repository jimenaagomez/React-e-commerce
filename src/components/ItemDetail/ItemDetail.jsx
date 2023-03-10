import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCarritoContext } from "../../context/CarritoContext"
export const ItemDetail = ({ prod }) => {

  const { addItem } = useCarritoContext()

  const onAdd = (cantidad) => {
    addItem(prod, cantidad)
  }

  return (
    <div className="container  mb-5 mt-2 ">
      <div className="row g-0">

        <div className="col-md-4 mt-5 ms-1">
          <img src={prod.img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-6 ms-2 ">
          <div className="row g-0">

          </div>
          <div className="col">
            <div className={`card-body `}>
              <h5 className="card-title mt-5 text-decoration-underline fs-1 mb-4">{prod.nombre}</h5>
              <hr />
              <p className="card-text fs-5">Descripción: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, laborum consequatur doloribus at nemo est voluptatibus dolores, quas deserunt nihil quaerat repellendus consectetur aperiam vero deleniti distinctio reprehenderit cum cumque! </p>
              <p className="card-text ">Precio: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
              <button className="btn btn-primary disabled">Stock: {prod.stock}</button>
              <hr />
              <ItemCount ValInicial={1} stock={prod.stock} onAdd={onAdd} />
              <hr />
              <Link className="nav-link" to={"/cart"}><button className="btn btn-success mb-2 mt-0 ">Finalizar Compra</button></Link>

            </div>

        </div>
      </div>

    </div>
    </div>
  )
}