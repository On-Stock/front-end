import React from 'react'
import { Navbar } from '../components/Navbar'
import { Stock } from '../components/Stock'

export interface ICategoriesProps {
  cartCount: number
  setCartCount: React.Dispatch<React.SetStateAction<number>>
}

const Categories: React.FC<ICategoriesProps> = ({ cartCount, setCartCount }) => {
  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Stock setCartCount={setCartCount} />
    </div>
  )
}

export default Categories
