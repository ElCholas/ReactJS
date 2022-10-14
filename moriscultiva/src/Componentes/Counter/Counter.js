import "./Counter.css"
import { useState } from "react"

const Counter = ({initial = 1}) => {
    const [counter, setCounter] = useState(initial)

    const subtract = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    const add = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }



    return (
        <div className="counterBtn" >
            <button className="counter-subtract" onClick={subtract}>-</button>
            <p className="counter-numb" >{counter}</p>
            <button className="counter-add" onClick={add}>+</button>
        </div>
    )
}

export default Counter