import React from "react";

declare global {

  interface ProductProps {
    id?: string
    name: string
    price: string
    quantity?: number
    image: string
    stars: string
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

  interface SetCartCount {
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

  interface CartAndSetCart {
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
}