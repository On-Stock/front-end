import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Categories from './pages/Categories'
import Login from './pages/Login'
import './main.css'
import Cadastro from './pages/Cadastro'
import CreateProduct from './pages/HubAdmin/CreateProducts'
import CreateCategories from './pages/HubAdmin/CreateCategories'
import HubAdmin from './pages/HubAdmin/HubAdmin'
import ConsultProducts from './pages/HubAdmin/ConsultProducts'

function App() {
  //Inicializa o estado do carrinho
  const [cart, setCart] = useState<
    { id?: string; image: string; price: string; quantity?: number }[]
  >(() => {
    const storageCart = localStorage.getItem('cart')
    if (storageCart) {
      return JSON.parse(storageCart)
    }
    return []
  })

  //Use effect to show cart in console cartCount
  // useEffect(() => {
  //   console.log(cart)
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Landing cartCount={cart.length} setCartCount={setCart} />}
        />
        <Route
          path="/categorias"
          element={<Categories cartCount={cart.length} setCartCount={setCart} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hubAdmin" element={<HubAdmin />} />
        <Route path="/hubAdmin/createProducts" element={<CreateProduct />} />
        <Route path="/hubAdmin/createCategories" element={<CreateCategories />} />
        <Route path="/hubAdmin/consultProducts" element={<ConsultProducts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
