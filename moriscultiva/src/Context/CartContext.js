import { useState, useEffect ,createContext } from "react"

export const CartContext = createContext ({
    cart:[],
    totalQuantity:0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState (0)
    const [total, setTotal] = useState(0)


    useEffect(()=>{
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    },[cart])

    useEffect(()=>{
        const total = getTotal()
        setTotal(total)
    },[cart])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            console.log('Ya esta en el carrito')
        }
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) =>{
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const getQuantity = () =>{
        let accu = 0 
        cart.forEach(prod =>{
            accu += prod.quantity
        })
        return accu
    }

    const getTotal= () =>{
        let accu = 0
        cart.forEach(prod =>{
            accu += prod.quantity * prod.precio
        })
        return accu
    }
    
    const clearCart = () =>{
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, total, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

