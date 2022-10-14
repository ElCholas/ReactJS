import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import { getProductos, getProductosByCategoria } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaProductos} = useParams()


    useEffect(() => {
        setLoading(true)
        const fuction = categoriaProductos ? getProductosByCategoria : getProductos
        fuction(categoriaProductos).then(response => {
            console.log(response)
            setProductos(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoriaProductos])

    if (loading) {
        return (<h1 className="loading">Cargando...</h1>)
    }

    return (
        <div>
            <h1 className="ItemListContainer">Aceites</h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer