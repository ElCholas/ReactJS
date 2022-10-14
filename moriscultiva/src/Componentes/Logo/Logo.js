import "./Logo.css"
import { Link } from "react-router-dom"

const Logo = () => {
    const src = "https://uxwing.com/wp-content/themes/uxwing/download/nature-and-environment/marijuana-icon.png"
    return (
        <Link to="/"><img src={src} className="Logo" alt="Logo Ecommerce" /></Link>
    )
}

export default Logo