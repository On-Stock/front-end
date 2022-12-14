import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillPlusSquare } from 'react-icons/ai'
import { ProductConsult } from '../../components/HubAdmin/ProductConsult'

export default function ConsultProducts() {
  const [products, setProducts] = useState<[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/getAllProducts').then(response => {
      setProducts(response.data)
    })
  }, [products])

  const navigate = useNavigate()

  return (
    <div>
      <a
        className="text-2xl text-white font-bold whitespace-nowrap bg-purple py-1 px-4 absolute top-2 left-2"
        onClick={() => navigate('/hubAdmin')}
      >
        Voltar
      </a>
      <div className="flex flex-col m-auto w-[500px]">
        <h2 className="text-white font-semibold text-4xl mt-24 bg-purple py-4 text-center relative">
          Produtos
          <button onClick={() => navigate('/hubAdmin/createProducts')}>
            <AiFillPlusSquare className="text-white text-7xl hover:text-purple absolute top-0 -right-20" />
          </button>
        </h2>

        {products.map((category: any) => (
          <ProductConsult
            key={category.id}
            productName={category.name}
            id={category.id}
          />
        ))}
      </div>
    </div>
  )
}
