import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <NavBar />
          <Routes>
            <Route path='*' element={<h1 className='text-center mt-4'>Esta página no existe</h1>} />
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={`Productos filtrados por Categorias`}/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        <Routes />
      </CartContextProvider>
    </div>
  );
}

export default App;
