import "./Item.css"
import React from "react"
import { Link } from "react-router-dom"


const Item = ({ id, img, nombre, precio }) => {
    return (
        <div className="card">
            <img className="card_img" src={img} alt={nombre} />
            <h1 className="card_nombre">{nombre}</h1>
            <p className="card_precio">${precio}</p>
            <button className="card_boton"><Link className="card_link" to={`/detail/${id}`}>Ver Detalle</Link></button>
        </div>
    )
}

export default Item