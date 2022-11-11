import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../utils/urlRequest'
import api from '../services/api'

function validate(formDataInputs: { [attr: string]: FormDataEntryValue }) {
  let isValid: boolean = true

  Object.entries<FormDataEntryValue>(formDataInputs).forEach(attribute => {
    let [propertyName, propertyValue] = attribute

    // alert(`prop: ${propertyName} // val: ${propertyName}`);

    if (
      (propertyName == 'login' && propertyValue.toString().length == 0) ||
      (propertyName == 'password' && propertyValue.toString().length == 0) ||
      (propertyName == 'name' && propertyValue.toString().length == 0) ||
      (propertyName == 'email' && propertyValue.toString().length == 0)
    ) {
      isValid = false
    }
  })

  return isValid
}

export default function Cadastro() {
  const navigate = useNavigate()

  function handleSignupForm(event: FormEvent) {
    event.preventDefault()

    const form = new FormData(event.target as HTMLFormElement)
    const formDataInputs = Object.fromEntries(form.entries())

    // Object.keys(formDataInputs).forEach((chave)=>alert(`Nome da chave: ${chave}`) )

    if (validate(formDataInputs)) {
      fetch(`${BACKEND_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formDataInputs.name,
          email: formDataInputs.email,
          login: formDataInputs.login,
          password: formDataInputs.password,
          address: formDataInputs.address,
          phone: formDataInputs.phone,
        }),
      })
        .then(data => alert('Dados enviados com sucesso!! Status: ' + data.status))
        .catch(error => {
          console.log(error)
          alert('Houve um erro no cadastro do usuário!! ' + error)
        })
    } else {
      alert('Os campos de Login, Senha, Nome e Email são obrigatórios!!!')
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
        // action="#"
        method="post"
        className="mt-6 flex flex-col w-96 text-white text-left gap-8 text-2xl mb-16"
        onSubmit={handleSignupForm}
      >
        <h2 className="text-white font-semibold text-6xl mt-10 bg-purple py-8 text-center">
          Criar Conta
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
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Fulano123$"
            className=" h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
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
            placeholder="fulano@gmail.com"
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <button
          type="submit"
          className=" text-white text-[1vw] border-2 border-purple py-1 px-6 hover:bg-purple font-openSans font-semibold"
        >
          Fazer Cadastro
        </button>
        <a
          className="text-left text-sm hover:underlin -mt-4 hover:text-purple text-white hover:underline"
          onClick={() => navigate('/login')}
        >
          Já tem uma conta? Fazer login
        </a>
      </form>
    </div>
  )
}
