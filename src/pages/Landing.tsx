import React, { useState } from 'react'
import { BestSellers } from '../components/BestSellers'
import { Brands } from '../components/Brands'
import { Home } from '../components/Home'
import { Navbar } from '../components/Navbar'
import Promo from '../assets/promo.png'
import { About } from '../components/About'

export interface ILandingProps {
  cartCount: number
  setCartCount: React.Dispatch<
    React.SetStateAction<
      {
        id?: string | undefined
        image: string
        price: string
        quantity?: number
      }[]
    >
  >
}

const Landing: React.FC<ILandingProps> = ({ cartCount, setCartCount }) => {
  return (
    <div className="max-w-[1344] mx-auto flex items-center flex-col">
      <Navbar cartCount={cartCount} />
      <Home />
      <Brands />
      <BestSellers setCartCount={setCartCount} />
      <img src={Promo} alt="Promo Banner" className="w-full" />
      <About />
    </div>
  )
}

export default Landing
