import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { ProductCard } from '../components/ProductCard'
import Stars4 from '../assets/stars4.svg'
import { useAppContext } from '../context/hook'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import axios from 'axios'

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

  const navigate = useNavigate()

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

  async function handleBuyProducts() {
    let productAmount = 0
    for (let i = 0; i < cart.length; i++) {
      await axios
        .get(`http://localhost:3000/getUniqueProduct/${cart[i].id}`)
        .then(response => {
          productAmount = response.data.amount
        })

      let data = {
        id: cart[i].id,
        amount: productAmount - cart[i].quantity!!, // !! = not null assertion
      }

      const response = await api.post(`/buyProduct`, data)
    }

    alert('Compra realizada com sucesso!')

    localStorage.removeItem('cart')
    setCartCount([])
  }

  function handleClearCart() {
    localStorage.removeItem('cart')
    setCartCount([])
  }

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
      <div className="w-[500px] mx-auto flex items-center flex-col mt-10 gap-6">
        {state.user.id != '' && cart.length > 0 ? (
          <button
            onClick={handleBuyProducts}
            className=" w-[68%] text-white text-[1vw] border-2 border-green-600 py-1 px-6 hover:bg-green-600 font-openSans font-semibold"
          >
            Finalizar Compra
          </button>
        ) : null}
        {state.user.id == '' && cart.length > 0 ? (
          <button
            onClick={() => navigate('/login')}
            className=" w-[68%] text-white text-[1vw] border-2 border-green-600 py-1 px-6 hover:bg-green-600 font-openSans font-semibold"
          >
            Fazer Login
          </button>
        ) : null}

        {cart.length > 0 ? (
          <button
            onClick={handleClearCart}
            className=" w-[68%] text-white text-[1vw] border-2 border-red-600 py-1 px-6 hover:bg-red-600 font-openSans font-semibold"
          >
            Limpar Carrinho
          </button>
        ) : (
          <button
            onClick={() => navigate('/')}
            className=" w-[68%] text-white text-[1vw] border-2 border-purple py-1 px-6 hover:bg-purple font-openSans font-semibold"
          >
            Voltar para o Início
          </button>
        )}
      </div>
    </div>
  )
}
