import "./ItemListContainer.css"
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../Services/firebase"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaProductos } = useParams()


    useEffect(() => {

        setLoading(true)

        const collectionRef= categoriaProductos
        ? query(collection(db,"productos"),where("categoria","==", categoriaProductos ))
        : collection(db,"productos")
        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAdapted= response.docs.map(doc=>{
                const data = doc.data()
                console.log(data)
                return {id:doc.id, ...data }
            })

            console.log(productsAdapted)
            setProductos(productsAdapted)

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