import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import { consultarBDD } from "../../utils/funciones.js"
import { getProductos } from '../../utils/firebase.js'
import { ItemList } from '../ItemList/ItemList.jsx'
import { Carrousel } from '../Carrousel/Carrousel.jsx'


export const ItemListContainer = () => {
  const { idCategoria } = useParams() //sirve para consulta el parametro de la aplicacion, ejemplo, el que pones en el browser, na mas
  const [productos, setProductos] = useState([])
  useEffect(() => {
    if(idCategoria){
      getProductos().then(products => { 
        const prods = products.filter(prod=> prod.stock > 0).filter(prod => prod.categoria === idCategoria)
        const items = <ItemList prods={prods} plantilla="item"/>
        console.log(items)
        setProductos(items)
      })
      

    }else{
      getProductos().then(products => { //BBD SGNIFICA BASE DE DATOS, funcion asincrona tipo fetch en funciones.js
        const prods = products.filter(prod=> prod.stock > 0)
        const items = <ItemList prods={prods} plantilla="item"/>
        console.log(items)
        setProductos(items)
      })

    }

    

  }, [idCategoria])

  return (
    <>
    <div className={`row cardProductos `}>
      <Carrousel/>
      <p class={`text-center fs-1 fw-bolder `}>NUESTROS PRODUCTOS:</p>
      {productos}
    </div>
    </>
  )
}
//fondoNegro