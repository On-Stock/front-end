import React from 'react'
import { Navbar } from '../components/Navbar'
import { Stock } from '../components/Stock'
import { useAppContext } from '../context/hook'

const Categories: React.FC<CartAndSetCart> = ({ cartCount, setCartCount }) => {
  const { state } = useAppContext()
  state.page = 'categories'

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Stock setCartCount={setCartCount} />
    </div>
  )
}

export default Categories
