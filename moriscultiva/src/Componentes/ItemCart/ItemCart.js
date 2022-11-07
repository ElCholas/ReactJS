import React from "react"
import { useContext } from "react"
import {CartContext} from "../../Context/CartContext"




const ItemCart= ({productos}) =>{
    const {removeItem} = useContext(CartContext)
    
    return (
        <div>
        <div>
            <h1>{productos.nombre}</h1>
        </div>
        <div>
            <p>Cantidad: {productos.quantity}</p>
        </div>
        <div>
            <p>Precio: {productos.precio}</p>
        </div>
        <div><button onClick={()=>{removeItem(productos.id)}}></button></div>
    </div>
    
    )
}

export default ItemCart