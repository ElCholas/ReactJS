import { CartContext } from "../../../Context/CartContext";
import { addDoc, collection, Timestamp, writeBatch } from "firebase/firestore" 
import { getDocs, query, where, documentId } from "firebase/firestore";
import { db } from "../index"
import { useContext } from "react";

export const useOrdersFromFirestore=()=>{
const {cart, total} = useContext(CartContext)
const createOrder = async (DatosCompra) => {
    try {
    const objOrder = {
        buyer:DatosCompra,
        items: cart,
        total: total,
        date:Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(db)

    const outOfStock=[]

    const ids = cart.map(prod => prod.id)

    const productRef = collection(db, "productos")

    const prodcutsAddedFromFirestore = await getDocs(query(productRef, where(documentId(), "in", ids)))

    const { docs } = prodcutsAddedFromFirestore

    docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock
        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity
        if (stockDb >= prodQuantity) {
            batch.update(doc.ref, {stock:stockDb - prodQuantity})
        } else{
            outOfStock.push({id: doc.id,...dataDoc})
        }
    })

    if(outOfStock.length === 0){
        await batch.commit()
        const orderRef = collection(db,"orders")
        const orderAdded = await addDoc(orderRef,objOrder)
        console.log(`El id de su orden es: ${orderAdded.id} `)

    } else {
        console.log("Hay productos que estan fuera de stock")
    }
} catch (error){
    return error
}
return {
    createOrder
}
}
}
