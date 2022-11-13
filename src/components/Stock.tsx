import { ProductCard } from './ProductCard'
import Brio from '../assets/products/brio.png'
import C920 from '../assets/products/c920.webp'
import Deck from '../assets/products/deck.webp'
import Hyperx from '../assets/products/hyperx.jpg'
import Linkpro from '../assets/products/linkpro.png'
import Michyper from '../assets/products/michyper.png'
import Stars5 from '../assets/stars5.svg'
import Stars4 from '../assets/stars4.svg'
import Stars3 from '../assets/stars3.svg'
import Stars2 from '../assets/stars2.svg'
import Stars1 from '../assets/stars1.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function Stock({ setCartCount }: SetCartCount) {
  const [categories, setCategories] = useState<[]>([])
  const [products, setProducts] = useState<[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/getCategories').then(response => {
      setCategories(response.data)
    })
    axios.get('http://localhost:3000/getAllProducts').then(response => {
      setProducts(response.data)
    })
  }, [])

  return (
    <div className="w-full flex px-10 mt-10 justify-between">
      <div className="flex flex-col border w-[500px] border-purple mr-2 h-fit">
        <h2 className="text-white px-4 font-semibold text-[1.5vw] mb-4 mt-4">
          Categorias
        </h2>
        {categories.map((category: any) => (
          <button className="text-left text-purple hover:bg-purple text-[1vw] hover:text-white px-4 py-4 w-full border-y border-purple">
            {category.name}
          </button>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center ">
        {products.map((product: any) => (
          <ProductCard
            id={product.id}
            name={product.name}
            image={product.photo}
            price={product.price}
            stars={Stars4}
            setCartCount={setCartCount}
          />
        ))}
      </div>
    </div>
  )
}
