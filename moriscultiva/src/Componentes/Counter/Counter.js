import "./Counter.css"
import { useState } from "react"

const Counter = ({stock, initial = 1, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const subtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }



    return (
        <div className="counterBtn" >
            <button className="counter-subtract" onClick={subtract}>-</button>
            <p className="counter-numb" >{quantity}</p>
            <button className="counter-add" onClick={add}>+</button>
            <div>
                <button onClick={()=>onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter