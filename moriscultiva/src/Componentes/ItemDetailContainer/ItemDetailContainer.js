import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
/* import { getProductoById } from "../../asyncMock" */
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../Services/firebase"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()
    const { productoId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const docRef=  doc(db, 'productos', productoId)

        getDoc(docRef).then(response=>{
            const data= response.data()
            const productsAdapted = {id:response.id, ...data} 
            setProducto(productsAdapted)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productoId])

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