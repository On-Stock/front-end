import Cookies from 'js-cookie'
import { useState, FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { INITIAL_STATE } from '../context'
import { useAppContext } from '../context/hook'
import api from '../services/api'

interface AccountProps {
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

export default function Account({ cartCount, setCartCount }: AccountProps) {
  const { state } = useAppContext()
  state.page = 'account'

  const navigate = useNavigate()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [login, setLogin] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  useEffect(() => {
    setName(state.user.name)
    setEmail(state.user.email)
    setAddress(state.user.address)
    setLogin(state.user.login)
    setPhone(state.user.phone)
  }, [state])

  async function handleUpdateUser(event: FormEvent) {
    event.preventDefault()
    state.user.login = login
    state.user.name = name
    state.user.email = email
    state.user.address = address
    state.user.phone = phone

    const data = {
      name,
      email,
      login,
      address,
      phone,
    }

    const response = await api.post('/updateUser', data)
    if (response.status === 201) {
      alert('Informações atualizadas com sucesso')
    } else {
      alert('Erro ao atualizar informações')
    }
  }

  async function handleDeleteUser() {
    const data = {
      email,
    }

    const response = await api.post('/deleteUser', data)
    if (response.status === 201) {
      alert('Usuário deletado com sucesso')
      state.user = INITIAL_STATE.user
      Cookies.remove('session')
      navigate('/')
      window.location.reload()
    } else {
      alert('Erro ao deletar usuário')
    }
  }

  return (
    <div className="max-w-[1344] mx-auto flex items-center flex-col">
      <Navbar cartCount={cartCount} />

      <form
        // action="#"
        method="post"
        className="mt-6 flex flex-col w-96 text-white text-left gap-8 text-2xl mb-16"
        onSubmit={handleUpdateUser}
      >
        <h2 className="text-white font-semibold text-6xl mt-10 bg-purple py-8 text-center">
          Editar Conta
        </h2>
        <div>
          <label htmlFor="login" className="clear-both mr-10">
            Login
          </label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Email ou Nickname"
            onChange={e => setLogin(e.target.value)}
            value={login}
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <div>
          <label htmlFor="name" className="clear-both w-full">
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="Nome e Sobrenome"
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>
        <div>
          <label htmlFor="address" className="clear-both w-full">
            Endereço
          </label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={e => setAddress(e.target.value)}
            value={address}
            placeholder="Rua X, 123"
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>
        <div>
          <label htmlFor="phone" className="clear-both w-full">
            Telefone para Contato
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={e => setPhone(e.target.value)}
            value={phone}
            placeholder="85 987654321"
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="clear-both w-full">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="fulano@gmail.com"
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <button
          type="submit"
          className=" text-white text-[1vw] border-2 border-green-500 py-1 px-6 hover:bg-green-500 font-openSans font-semibold"
        >
          Editar Informações
        </button>
      </form>
      <button
        onClick={handleDeleteUser}
        className=" text-white text-[1vw] border-2 border-red-500 py-1 px-6 hover:bg-red-500 font-openSans font-semibold"
      >
        Excluir Conta
      </button>
    </div>
  )
}
