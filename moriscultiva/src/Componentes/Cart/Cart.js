import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"
import ItemCart from "../ItemCart/ItemCart"

const Cart = ()=>{

    const {cart, total, clearCart} = useContext(CartContext)


    if(cart.length===0)
    return(
        <div>
            <p className="cart-vacio">No hay productos en el carrito.</p>
        </div>
    )

    return(
        
        <div>

            <h1>Carrito</h1>
            <div>{cart.map(prod =><ItemCart key={prod.id} productos={prod}/>)}</div>
            <div>
                <div>
                    <p>Total: ${total}</p>
                    </div>
            </div>
                
            <button onClick={()=>clearCart()}>Vaciar Carrito</button>
            <Link to={"/checkout"}><button>Comprar</button> </Link>

        </div>

    )
}


export default Cart