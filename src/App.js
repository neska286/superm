import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {

  return (
    // <div >
    //   <Navbar/>
    //   {/* <Home/> */}
    //   {/* <AboutUs/> */}
    //   <Products/>
    // </div>
    <>
    <BrowserRouter>
    <Navbar/>
    <div className='bg'>
    <div className='container'>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/about" element={<AboutUs />} />
    </Routes>
    <Routes>
      <Route path="/products" element={<Products />} />
    </Routes>
    <Routes>
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </div>
    </div>
  </BrowserRouter>
  </>
  );
}

export default App;
