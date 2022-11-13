import { AiFillEdit } from 'react-icons/ai'
import { CiSquareRemove } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

interface ProductProps {
  productName: string
  id: string
}

export function ProductConsult({ productName, id }: ProductProps) {
  const navigate = useNavigate()

  async function handleDeleteProduct() {
    const data = {
      id: id,
    }

    const response = await api.post('/deleteProduct', data)
    if (response.data.status == 'sucess') {
      alert(response.data.message)
    } else {
      alert('Erro ao deletar produto')
    }
  }

  return (
    <div className=" mb-2 h-14 bg-transparent border-2 border-purple w-[100%] px-4 font-openSans font-semibold text-white">
      <div className="flex h-full align-middle items-center gap-3">
        <h1 className="text-white font-openSans font-semibold text-[1.5vw] mb-0 flex-1">
          {productName}
        </h1>
        <button
          onClick={handleDeleteProduct}
          className=" text-white text-4xl hover:text-purple"
        >
          <CiSquareRemove />
        </button>
        <button
          onClick={() => navigate('/hubAdmin/updateProduct', { state: { id: id } })}
          className=" text-white text-4xl hover:text-purple"
        >
          <AiFillEdit />
        </button>
      </div>
    </div>
  )
}
