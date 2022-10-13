import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductoById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { productoId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getProductoById(productoId)
            .then(producto => {
                setProducto(producto)
            }).finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (<h1 className="loading">Cargando...</h1>)
    }

    return (
        <div className="cardDetail">
            <h1 className="detalleProducto">Detalle del producto</h1>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer