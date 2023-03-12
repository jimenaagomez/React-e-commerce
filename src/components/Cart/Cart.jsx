import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"
export const Cart = () => {
  const { carrito, emptyCart, totalPrice, } = useCarritoContext()

  return (
    <>{
      carrito.length === 0
        ? <div className="container alineation ">
          <div className="align-content-center ">
            <h2>El carrito está vacio, agregue un producto para finalizar compra</h2>
            <br />
            <Link className="nav-link" to={"/"}> <button className="btn btn-primary  ">Continuar comprando</button></Link>
          </div>
        </div>
        :
        <div className="container ">
          <ItemList prods={carrito} plantilla="itemcart" />
          <div className="divButtons">
            <p>Resumen de la compra: {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
            <button className="btn btn-primary mt-3 " onClick={() => emptyCart()}>Vaciar carrito</button>
            <Link className="nav-link" to={"/"}><button className="  btn btn-dark mt-3 ">Continuar comprando</button></Link>
            <Link className="nav-link" to={"/checkout"}><button className=" btn btn-dark mt-3 mb-5">Finalizar compra</button></Link>
          </div>
        </div>
    }
    </>
  )
}
