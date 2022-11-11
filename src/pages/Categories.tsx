import React from 'react'
import { Navbar } from '../components/Navbar'
import { Stock } from '../components/Stock'

const Categories: React.FC<CartAndSetCart> = ({ cartCount, setCartCount }) => {
  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Stock setCartCount={setCartCount} />
    </div>
  )
}

export default Categories
