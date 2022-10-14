import "./App.css"
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaProductos" element={<ItemListContainer/>}/>
          <Route path="/detail/:productoId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1 className="notFound">404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
