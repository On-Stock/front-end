import { useState } from 'react'

export function ProductCard({
  id,
  image,
  name,
  price,
  setCartCount,
  stars,
}: ProductProps) {
  function addToCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const product = cart.find((product: { id: string | undefined }) => product.id === id)
    if (product) {
      product.quantity += 1
      localStorage.setItem('cart', JSON.stringify(cart))
      setCartCount(cart)
    } else {
      cart.push({ id, image, price, quantity: 1 })
      localStorage.setItem('cart', JSON.stringify(cart))
      setCartCount(cart)
    }
  }

  return (
    <a className="w-[300px] h-[400px] bg-productDiv flex flex-col justify-center items-center px-6 py-10">
      <img
        src={image}
        alt="Brio Webcam"
        className="max-w-full bg-productBack h-full object-scale-down"
      />
      <p className="text-start text-paragraph font-medium text-lg mt-2 w-full ">{name}</p>

      <div className="flex items-center">
        <div className="flex flex-col">
          <span className="font-medium text-lg text-purple text-start w-full  mt-2 mb-1">
            R${price}
          </span>

          <img src={stars} alt="Rating" className=" pr-32" />
        </div>
        <button
          onClick={() => addToCart()}
          className="w-20 h-12 bg-purple rounded-full text-white font-openSans text-3xl mt-2 leading-[0px]"
        >
          +
        </button>
      </div>
    </a>
  )
}
