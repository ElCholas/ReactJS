import { useState, useEffect } from "react"
import { getProductoById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { productoId } = useParams()

    useEffect(() => {
        getProductoById(productoId)
            .then(producto => {
                setProducto(producto)
            })
    }, [])

    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer