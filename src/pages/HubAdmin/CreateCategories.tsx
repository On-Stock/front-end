import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

export default function CreateCategories() {
  const navigate = useNavigate()

  const [categoryName, setCategoryName] = useState<string>('')
  const [categoryDescription, setCategoryDescription] = useState<string>('')

  async function handleCreateCategory(event: FormEvent) {
    event.preventDefault()

    const data = {
      name: categoryName,
      description: categoryDescription,
    }
    if (categoryName != '') {
      const response = await api.post('/createCategory', data)
      if (response.data.name) {
        alert(`Categoria ${categoryName} criada com sucesso`)
      } else {
        alert('Erro ao criar categoria')
      }
    }
  }

  return (
    <div>
      <a
        className="text-2xl text-white font-bold whitespace-nowrap bg-purple py-1 px-4 absolute top-2 left-2"
        onClick={() => navigate('/hubAdmin')}
      >
        Voltar
      </a>

      <form
        method="post"
        onSubmit={handleCreateCategory}
        className="-mt-4 flex flex-col w-96 text-white text-left gap-4 text-2xl m-auto "
      >
        <h2 className="text-white font-semibold text-4xl mt-24 bg-purple py-4 text-center">
          Criar Categoria
        </h2>
        <div>
          <label htmlFor="name" className="clear-both mr-10">
            Nome
          </label>
          <input
            type="text"
            name="name"
            value={categoryName}
            onChange={event => setCategoryName(event.target.value)}
            required
            id="name"
            placeholder="Nome da Categoria"
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <div>
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={event => setCategoryDescription(event.target.value)}
            value={categoryDescription}
            placeholder="Descrição da Categoria"
            className=" h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="reset"
            onClick={() => {
              setCategoryName('')
              setCategoryDescription('')
            }}
            className=" w-[30%] text-white text-[1vw] border-2 border-red-600 py-1 px-6 hover:bg-red-600 font-openSans font-semibold"
          >
            Limpar
          </button>

          <button
            type="submit"
            className=" w-[68%] text-white text-[1vw] border-2 border-green-600 py-1 px-6 hover:bg-green-600 font-openSans font-semibold"
          >
            Criar Categoria
          </button>
        </div>
      </form>
    </div>
  )
}
