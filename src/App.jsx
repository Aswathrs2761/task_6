import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Pages/Nav'
import Footer from './Pages/Footer'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import PagenotFound from './Pages/PagenotFound'
import { useState } from 'react'

function App() {

  const [value,Setvalue] = useState([])

  const [cart,Setcart] = useState([])


  return (
    <BrowserRouter>
        <div>
          <Nav cart = {cart} />
        </div>

        <Routes>

        <Route path='/' element ={<Products value = {value} Setvalue = {Setvalue}  cart = {cart} Setcart = {Setcart} />} />
        <Route path='/Cart' element = {<Cart  cart = {cart} Setcart = {Setcart} />} />
        <Route path='*' element = {<PagenotFound/>} />

        </Routes>

        <div>
          <Footer/>
        </div>

    </BrowserRouter>
  )
}

export default App
