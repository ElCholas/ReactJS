import "./App.css"
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from './Context/CartContext'
import Cart from './Componentes/Cart/Cart'
import Checkout from "./Componentes/CheckOut/Checkout";

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaProductos" element={<ItemListContainer/>}/>
          <Route path="/detail/:productoId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1 className="notFound">404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
