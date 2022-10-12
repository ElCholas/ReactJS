import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos().then(response => {
            console.log(response)
            setProductos(response)
        })
    }, [])

    return (
        <div>
            <h1 className="ItemListContainer">Lista de productos</h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer