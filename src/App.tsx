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
import ConsultCategories from './pages/HubAdmin/ConsultCategories'
import UpdateProduct from './pages/HubAdmin/UpdateProduct'
import UpdateCategory from './pages/HubAdmin/UpdateCategory'

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

  function sumQuantityFromCart() {
    let sum = 0
    cart.forEach(item => {
      if (item.quantity != undefined) {
        sum += item.quantity
      }
    })
    return sum
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Landing cartCount={sumQuantityFromCart()} setCartCount={setCart} />}
        />
        <Route
          path="/categorias"
          element={
            <Categories cartCount={sumQuantityFromCart()} setCartCount={setCart} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hubAdmin" element={<HubAdmin />} />

        <Route path="/hubAdmin/consultProducts" element={<ConsultProducts />} />
        <Route path="/hubAdmin/createProducts" element={<CreateProduct />} />
        <Route path="/hubAdmin/updateProduct" element={<UpdateProduct />} />

        <Route path="/hubAdmin/consultCategories" element={<ConsultCategories />} />
        <Route path="/hubAdmin/createCategories" element={<CreateCategories />} />
        <Route path="/hubAdmin/updateCategory" element={<UpdateCategory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
