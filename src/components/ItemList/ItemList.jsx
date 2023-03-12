import { Item } from "../Item/Item"
import { ItemCart } from "../ItemCart/ItemCart"

export const ItemList = ({prods, plantilla}) => { 
  
  return (
    <>
    {plantilla === "item"
    ?  prods.map(producto => <Item item={producto} key={producto.id}/>)
  : prods.map(producto => <ItemCart item={producto} key={producto.id}/>)
 
  }
       
    </>
  )
}