import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

export default function HubAdmin() {
  const navigate = useNavigate()

  return (
    <div className="w-full">
      <a
        className="text-2xl text-white font-bold whitespace-nowrap bg-purple py-1 px-4 absolute top-2 left-2"
        onClick={() => navigate('/')}
      >
        Voltar
      </a>

      <div className="flex flex-col items-center text-center gap-10 w-[50vw] m-auto   ">
        <h2 className=" w-full text-white font-semibold text-6xl mt-24 bg-purple py-4 px-4 text-center">
          Hub Admin
        </h2>
        <button
          onClick={() => navigate('/hubAdmin/consultProducts')}
          className=" w-full text-white text-4xl border-2 border-purple py-4 px-6 hover:bg-purple font-openSans font-semibold"
        >
          Consultar Produtos
        </button>

        <button
          onClick={() => navigate('/hubAdmin/createProducts')}
          className=" w-full text-white text-4xl border-2 border-purple py-4 px-6 hover:bg-purple font-openSans font-semibold"
        >
          Criar Produtos
        </button>
        <button
          onClick={() => navigate('/hubAdmin/consultCategories')}
          className=" w-full text-white text-4xl border-2 border-purple py-4 px-6 hover:bg-purple font-openSans font-semibold"
        >
          Consultar Categorias
        </button>
        <button
          onClick={() => navigate('/hubAdmin/createCategories')}
          className=" w-full text-white text-4xl border-2 border-purple py-4 px-6 hover:bg-purple font-openSans font-semibold"
        >
          Criar Categorias
        </button>
      </div>
    </div>
  )
}
