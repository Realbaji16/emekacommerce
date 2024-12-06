import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';

import Home from './modules/Home/Home';
import Product from './modules/Product/Product';
import Stuff from './modules/Stuff/Stuff';
import CategoryProduct from './modules/CategoryProduct/CategoryProduct';
import Cart from './modules/Cart/Cart';
import Cart1 from './modules/Cart/Cart1';

import Navbar from './components/Header/Navbarr';
import Contact from './components/Contact/Contact';
import Gallery from './Gallery/Gallery';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:id' element={<Product/>}/>
      <Route path='/product' element={<Stuff/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/categories/:name' element={<CategoryProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/cart1' element={<Cart1/>}/>
      <Route path='*' element={<div>404</div>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
