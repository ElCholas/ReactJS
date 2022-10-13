import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getProductos().then(response => {
            console.log(response)
            setProductos(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

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