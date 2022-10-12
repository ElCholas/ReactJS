import "../../asyncMock"

const ItemDetail = ({ img , nombre, categoria, precio, descripcion }) => {
    return (
        <div>
            <img src={img} alt={nombre} />
            <h1>{nombre}</h1>
            <p>{categoria}</p>
            <p>${precio}</p>
            <p>Descripcion: {descripcion}</p>
        </div>
    )
}

export default ItemDetail