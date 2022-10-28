import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Categories from './pages/Categories'
import Login from './pages/Login'
import './main.css'
import Cadastro from './pages/Cadastro'

export interface IApp {}

const App: React.FC<IApp> = props => {
  const [cartCount, setCartCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Landing cartCount={cartCount} setCartCount={setCartCount} />}
        />
        <Route
          path="/categorias"
          element={<Categories cartCount={cartCount} setCartCount={setCartCount} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
