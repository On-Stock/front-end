import { ProductCard } from './ProductCard'
import Deck from '../assets/products/deck.webp'
import Hyperx from '../assets/products/hyperx.jpg'
import Linkpro from '../assets/products/linkpro.png'
import Stars5 from '../assets/stars5.svg'
import Stars4 from '../assets/stars4.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function BestSellers({ setCartCount }: SetCartCount) {
  const navigate = useNavigate()

  const [bestProducts, setBestProducts] = useState<[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/getBestProducts').then(response => {
      setBestProducts(response.data)
    })
  }, [])

  return (
    <div className="mt-12 flex flex-col h-fit w-full">
      <h2 className="text-white text-4xl font-medium w-full text-center">
        Mais Vendidos
      </h2>
      <div className="flex flex-row gap-20 mt-10 w-full justify-center">
        {bestProducts.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.photo}
            price={product.price}
            stars={Stars4}
            setCartCount={setCartCount}
          />
        ))}
      </div>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
          navigate('/categorias')
        }}
        className=" whitespace-nowrap mb-20 text-white w-[8vw] self-center mt-8 text-[1vw] border-2 border-purple py-1 px-6 hover:bg-purple font-openSans font-semibold"
      >
        Ver Mais
      </button>
    </div>
  )
}
