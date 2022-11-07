import "./ItemDetail.css"
import Counter from "../Counter/Counter"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const ItemDetail = ({ id,img, nombre, categoria, precio, descripcion, stock }) => {
const {addItem} = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, nombre, precio, quantity
        }
        addItem(productToAdd)
    }


    return (
        <div className="detail">
            <img className="detail_img" src={img} alt={nombre} />
            <div className="detail_text">
                <h1 className="detail_text-nombre">{nombre}</h1>
                <p className="detail_text-categoria"> {categoria}</p>
                <p className="detail_text-precio">Precio: ${precio}</p>
                <p className="detail_text-descripcion">Descripcion: {descripcion}</p>
                <Counter onAdd={handleOnAdd} stock= {stock} />
            </div>
        </div>
    )
}

export default ItemDetail