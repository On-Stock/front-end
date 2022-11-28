import { useNavigate } from 'react-router-dom'
import { ChangeEvent, FormEvent, useState } from 'react'
import { BACKEND_URL } from '../utils/urlRequest'
import api from '../services/api'
import { useAppContext } from '../context/hook'
import { setSessionCookie } from '../utils/sessions'

export default function Login() {
  const navigate = useNavigate()
  const [loginValue, setLoginValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')

  const user = {
    id: '',
    name: '',
    email: '',
    login: '',
    password: '',
    address: '',
    phone: '',
    role: '',
  }

  const { state } = useAppContext()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    let { name, value } = event.target as HTMLInputElement

    if (name == 'login') setLoginValue(value as string)
    else setPasswordValue(value as string)
  }

  async function handleSendForm(event: FormEvent) {
    event.preventDefault()

    const data = { email: loginValue, password: passwordValue }

    const response = await api.post('/login', data)

    if (response.data.status === 'success') {
      const responseUser = response.data.user

      user.id = responseUser.id
      user.name = responseUser.name
      user.email = responseUser.email
      user.login = responseUser.login
      user.password = responseUser.password
      user.address = responseUser.address
      user.phone = responseUser.phone
      user.role = responseUser.role

      state.user = user
      setSessionCookie(JSON.stringify(user))

      navigate('/')
    } else {
      alert('email ou senha incorretos')
    }
  }

  return (
    <div className="flex flex-col items-center text-center ">
      <a
        className="text-5xl text-white font-bold whitespace-nowrap bg-purple py-4 w-full "
        onClick={() => navigate('/')}
      >
        ON STOCK
      </a>

      <form
        //   action="#"
        method="post"
        className="mt-6 flex flex-col w-96  text-white text-left gap-6 text-2xl "
        onSubmit={handleSendForm}
      >
        <h2 className="text-white font-semibold text-6xl mt-10 bg-purple py-8 text-center">
          Fazer Login
        </h2>
        <div>
          <label htmlFor="login" className="clear-both mr-10">
            Login
          </label>
          <input
            type="text"
            name="login"
            id="login"
            value={loginValue}
            onChange={handleChange}
            placeholder="Email "
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-base  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <div>
          <label htmlFor="password" className="mr-10">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={passwordValue}
            onChange={handleChange}
            placeholder="Fulano123$"
            className=" h-12 bg-transparent border-2 border-purple w-[100%] text-base  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <button
          type="submit"
          className=" text-white text-base border-2 border-purple py-1 px-6 hover:bg-purple font-openSans font-semibold"
        >
          Login
        </button>
        <a
          className="text-left text-sm hover:underline hover:text-purple -mt-4 text-white"
          onClick={() => navigate('/cadastro')}
        >
          Não tem uma conta? Criar conta
        </a>
      </form>
    </div>
  )
}
