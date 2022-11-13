import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoryConsult } from '../../components/HubAdmin/CategoryConsult'
import { AiFillPlusSquare } from 'react-icons/ai'

export default function ConsultCategories() {
  const [categories, setCategories] = useState<[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/getCategories').then(response => {
      setCategories(response.data)
    })
  }, [categories])

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
          Categorias
          <button onClick={() => navigate('/hubAdmin/createCategories')}>
            <AiFillPlusSquare className="text-white text-7xl hover:text-purple absolute top-0 -right-20" />
          </button>
        </h2>

        {categories.map((category: any) => (
          <CategoryConsult
            key={category.id}
            categoryName={category.name}
            id={category.id}
          />
        ))}
      </div>
    </div>
  )
}
