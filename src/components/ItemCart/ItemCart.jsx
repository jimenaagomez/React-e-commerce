import { useCarritoContext } from "../../context/CarritoContext"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemCart = ({item}) => {
     const {removeItem, addItem} = useCarritoContext()
     const onAdd = (cantidad) => {
        addItem(item, cantidad)
      }

    return (
        <div className="card mt-3 cardCart mr-2 ">
            <div className="row g-0">
            <div className="col-md-4">
                <img src={item.img} alt={`Imagen de ${item.nombre}`} className="img-fluid rounded-start " />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre} </h5>
                        <p className="card-text">Cantidad: {item.cant}  </p>
                        <p className="card-text">Precio unitario: ${new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                        <p className="card-text"> Subtotal: ${new Intl.NumberFormat('de-DE').format(item.cant * item.precio)} </p>
                        <ItemCount ValInicial={1} stock={item.stock} onAdd={onAdd} />

                        <button className="btn btn-primary " onClick={() => removeItem(item.id)}>Remover</button>
                    </div>
                </div>
           </div>
        </div>
    )
}