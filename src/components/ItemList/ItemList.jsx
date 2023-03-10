import { Item } from "../Item/Item"
import { ItemCart } from "../ItemCart/ItemCart"

export const ItemList = ({prods, plantilla}) => { //prods es un array
  /*recibe todos los elementos y lo transofrma a lo que seria un jsx, osea lo transforma el prods que viene de item list container, en un componente*/
  
  return (
    <>
    {plantilla === "item"
    ?  prods.map(producto => <Item item={producto} key={producto.id}/>)
  : prods.map(producto => <ItemCart item={producto} key={producto.id}/>)
 
  }
       
    </>
  )
}