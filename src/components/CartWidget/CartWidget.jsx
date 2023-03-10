import { Link } from "react-router-dom"
import { useCarritoContext } from "../../context/CarritoContext"
export const CartWidget = ({cantCarrito}) => {
  const { getItemQuantity } = useCarritoContext()
  return (
      <>
      <Link className="nav-link" to={"/cart"}>
      <i class="bi bi-cart-fill cartWidget fs-2 mb-3"></i>             
       {getItemQuantity() > 0 && <span className="cantCarrito">
          {getItemQuantity()}</span>}
        </Link>
      </>
  )
}