import { useState } from "react"
export const ItemCount = ({ ValInicial, stock, onAdd }) => {

  const [contador, setContador] = useState(ValInicial) 

  const sumar = () => contador < stock && setContador(contador + 1)
  const restar = () => contador > ValInicial && setContador(contador - 1)

  return (
    <div>

          <button className="btn btn-dark " onClick={() => restar()}>-</button>
          {contador}
          <button className="btn btn-dark" onClick={() => sumar()}>+</button>
          <button className="btn btn-dark" onClick={() => onAdd(contador)}>Añadir al carrito</button>
      
    </div>
  )
}