import "./ItemDetail.css"
import "../../asyncMock"
import Counter from "../../Counter/Counter"

const ItemDetail = ({ img, nombre, categoria, precio, descripcion }) => {
    return (
        <div className="detail">
            <img className="detail_img" src={img} alt={nombre} />
            <div className="detail_text">
                <h1 className="detail_text-nombre">{nombre}</h1>
                <p className="detail_text-categoria"> {categoria}</p>
                <p className="detail_text-precio">${precio}</p>
                <p className="detail_text-descripcion">Descripcion: {descripcion}</p>
                <Counter />
            </div>
        </div>
    )
}

export default ItemDetail