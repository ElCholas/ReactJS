import { useState, createContext } from "react";
import Swal from "sweetalert2";


export const formData= createContext({
    nombre:"",
    apellido:"",
    telefono:"",
    email:"",
})


const FormClient = ({completData}) =>{
    const [nombre, setNombre]= useState("")
    const [apellido, setApellido]= useState("")
    const [telefono, setTelefono]= useState("")
    const [email, setEmail]= useState("")
    const [checkEmail, setCheckEmail] = useState("")


    const submit = (e) => {
        e.preventDefault ();
        if (!nombre || !email || !telefono)
            {
                Swal.fire({
                    title: "Complete sus datos",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
            
                })
            }
            else if (email !== checkEmail && email && checkEmail) {
                Swal.fire({
                title: "Los emails no coinciden",
                html: "Por favor, intente nuevamente",
                buttons: true,
                dangerMode: true,
            })
        }
    
        else {
            Swal.fire({
                title: "Datos Guardados",
                icon: "success",
                buttons: true,
            })
        completData(
            nombre,
            apellido,
            telefono,
            email
        )
        }
        }

        return (
            <form >
    
                <div>
                    <input  value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" pattern="[a-zA-Z ]{1,35}"     placeholder="Nombre" required />
                    <input  value={apellido} onChange={(e) => setApellido(e.target.value)} type="text"     placeholder="Apellido" required/>
                    <input value={telefono}onChange={(e) => setTelefono(e.target.value)} type="number"   placeholder="Teléfono"required />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"     placeholder="Email" required/>
                    <input value={checkEmail} onChange={(e) => setCheckEmail(e.target.value)} type="Confirme Email"  placeholder="Email" required/>
    
    
                <div >
                <button onClick = {submit}> Submit Data</button>
                </div>
                
                </div>
            
                </form>
    )
}

export default FormClient 