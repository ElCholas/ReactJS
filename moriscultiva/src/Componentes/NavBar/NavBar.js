import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg NavBar" >
            <div className="container-fluid">
                <div className="container-logo">
                    <Logo />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="container collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/"><button className="nav-link" aria-current="page" href="#">Aceites</button></Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#">¿ Quienes Somos ?</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#">CBD</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#">Contacto</button>
                        </li>
                    </ul>
                </div>
                <div className="container-cart container-logo nav-link_cart">
                    <CartWidget />
                    <p>0</p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar