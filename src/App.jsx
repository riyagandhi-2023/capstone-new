

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Header from "./components/Header";
import Products from "./components/Products";
import ProductsDetails from "./components/ProductsDetails.jsx"
import Contact from "./components/Contact";
import Footer from './components/Footer'
import Error from './components/Error'
import Loginm from './components/Loginm'
import SignUp from "./components/SignUp";

import './App.css'
import './styles/Navbar.css'
import './styles/Home.css'
import './styles/Header.css'
import './styles/Products.css'
import './styles/Cart.css'
import Cart from "./components/Cart";
import Login from './components/Login'
import './styles/Footer.css'
import './styles/Contact.css'
import './styles/Error.css'
import './styles/ProductsDetails.css'
import './styles/MyImage.css'
import './styles/Loginm.css'
import './styles/SignUp.css'
import './styles/Cart.css'




function App() {
  
  

  return (
    <>
    <div className='app'>
   
   <Router>
   <Header />
   <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<ProductsDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
      <Route path='/loginm' element={<Loginm />} />
      <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
      </Router>
        </div>
    </>
  )
}

export default App
