import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { ProductCard } from '../components/ProductCard'
import Stars4 from '../assets/stars4.svg'
import { useAppContext } from '../context/hook'

interface CartProps {
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

export default function Cart({ cartCount, setCartCount }: CartProps) {
  const { state } = useAppContext()
  state.page = 'cart'

  const [cart, setCart] = useState<
    { id?: string; name: string; image: string; price: string; quantity?: number }[]
  >(() => {
    const storageCart = localStorage.getItem('cart')
    if (storageCart) {
      return JSON.parse(storageCart)
    }
    return []
  })

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'))
  }, [cartCount])

  return (
    <div className="max-w-[1344] mx-auto flex items-center flex-col">
      <Navbar cartCount={cartCount} />
      <div className="flex flex-row flex-wrap gap-4 justify-center ">
        {cart.map(item => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            stars={Stars4}
            setCartCount={setCartCount}
          />
        ))}
      </div>
    </div>
  )
}
