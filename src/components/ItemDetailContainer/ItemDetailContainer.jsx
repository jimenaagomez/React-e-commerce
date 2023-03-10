import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducto } from "../../utils/firebase"
import { consultarBDD } from "../../utils/funciones"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    }, [])

    return (
        <div >
            <ItemDetail prod={producto}/>
        </div>
    )
}