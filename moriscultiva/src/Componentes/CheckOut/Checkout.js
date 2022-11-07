import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import FormClient from "../Form/Form";
import {useOrdersFromFirestore} from "../../Services/firebase/Firestore/Orders"

const Checkout = () => {
    const {clearCart} = useContext(CartContext)

    const [personalData, setPersonalData] = useState(false)

    const [datosDeCompra, setDatosCompra] = useState({})

    const [loading, setLoading] = useState(false)

    const completData= (nombre, apellido, telefono, email)=>{
        setDatosCompra({nombre, apellido, telefono, email})
        setPersonalData(true)
    }
    const navigate = useNavigate()

    const{createOrder} = useOrdersFromFirestore()

    const getOrder=()=>{    
        
        setLoading(true)

        createOrder(datosDeCompra).then(response => {
            if(response.result === 'orderCreated') {
                clearCart()

                Swal.fire({
                    title: "Gracias por su compra",
                    text:`El id de su orden es: ${response.id}`,
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                })
        
                navigate ('/')
            }else{
                Swal.fire({
                    title: "Algunos productos no se encuentran en stock",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
            }  
        }).catch(error => {
            Swal.fire({
                title:"Ha habido un error",
                icon: false,
                buttons: true,
                dangerMode: true,
            })
        }).finally(() => {
            setLoading(false)
        })
    }
        
    if(loading){
        return(
        <div>
            <h1>Estamos procesando su pedido...</h1>
        </div>)
    }

    return(
        <div>
            <h1>Completa los datos para generar la orden.</h1>
            <FormClient completData={completData}/>
            {personalData
            ?<button onClick={getOrder}>Generar pedido</button>
        :""}
        </div>
    )
            }

export default Checkout


