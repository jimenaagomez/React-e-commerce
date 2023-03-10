import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useCarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import { createOrdenCompra, updateProducto, getProducto } from "../../utils/firebase";
export const Checkout = () => {
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    let navigate = useNavigate()
    const datosForm = useRef()
    const consultarForm = (e) => {
        e.preventDefault()
        const data = new FormData(datosForm.current)
        const cliente = Object.fromEntries(data)
    
        const aux = [...carrito]
        aux.forEach(prodCarrito =>{
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant //descontar stock
                updateProducto(prodBDD.id, prodBDD)
            })
        })
        if( cliente.email == cliente.email2){
        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast(`🦄 Muchas gracias por comprar con nosotros!, su orden de compra con el id ${ordenCompra.id} por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            e.target.reset()
            emptyCart()
            navigate("/")
        })
    }else{
        toast.error('Los dos correos deben ser iguales!', {
    position: toast.POSITION.TOP_RIGHT
});
    }
    }

    return (
        <>
            {carrito.length === 0
                ?
                <div className="container alineation">
          <div className="align-content-center ">
            <h2>Debe agregar un producto para este paso</h2>
            <div className="m-5 ">
              
            </div>
            <Link className="nav-link" to={"/"}> <button className="btn btn-primary ">Continuar comprando</button></Link>
          </div>
        </div>
                :

                <div className="container contForm mt-5 mb-5 ">
                    <form onSubmit={consultarForm} ref={datosForm}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="nombre" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email2" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email2" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">Documento</label>
                            <input type="number" className="form-control" name="dni"  required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Numero telefonico</label>
                            <input type="number" className="form-control" name="celular"  required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Direccion</label>
                            <input type="text" className="form-control" name="direccion" required/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-5">Finalizar compra</button>
                        
                    </form>
                </div>

            }
        </>



    )
}