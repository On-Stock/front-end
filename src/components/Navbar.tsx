import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { INITIAL_STATE } from '../context'
import { useAppContext } from '../context/hook'

interface NavbarProps {
  cartCount: number
}

export function Navbar({ cartCount }: NavbarProps) {
  const navigate = useNavigate()

  const { state } = useAppContext()

  function handleLogout() {
    state.user = INITIAL_STATE.user
    Cookies.remove('session')
    navigate('/')
    window.location.reload()
  }

  return (
    <div className="bg-dark w-full h-24 flex flex-row align-middle items-center px-12 backdrop-blur-lg pt-4 sticky top-0 z-10">
      <Link to={'/'}>
        <a className="text-3xl text-white font-bold ml-2 whitespace-nowrap bg-purple px-4 py-2 ">
          ON STOCK
        </a>
      </Link>

      <div className="flex flex-row justify-end gap-8 w-full">
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
            navigate('/')
          }}
          className="text-white text-[1vw] hover:text-purple font-openSans font-semibold focus:text-purple"
        >
          Home
        </button>

        <button
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight - 90,
              behavior: 'smooth',
            })
            navigate('/')
          }}
          className="text-white text-[1vw] hover:text-purple font-openSans font-semibold focus:text-purple"
        >
          Mais Vendidos
        </button>
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
            navigate('/categorias')
          }}
          className="text-white text-[1vw] hover:text-purple font-openSans font-semibold focus:text-purple"
        >
          Categorias
        </button>
        <button
          onClick={() => {
            navigate('/')
            window.scrollTo(0, document.body.scrollHeight)
          }}
          className="text-white text-[1vw] hover:text-purple font-openSans font-semibold focus:text-purple"
        >
          Sobre
        </button>

        {/* BOTOES */}
        {state.user.id != '' ? (
          <>
            <button
              onClick={() => navigate('/account')}
              className=" text-white text-[1vw] bg-purple  px-6 -ml-4 hover:bg-purple/75 font-openSans font-semibold"
            >
              Conta
            </button>
            <span
              onClick={() => handleLogout()}
              className=" text-white text-[1vw] border-2 border-purple hover:cursor-pointer hover:bg-purple py-1 px-4 -ml-8 font-openSans font-semibold peer-hover:border-purple/75"
            >
              X
            </span>
          </>
        ) : null}

        {state.user.role == 'ADMIN' ? (
          <button
            onClick={() => navigate('/hubAdmin')}
            className=" text-white text-[1vw] border-2 border-purple py-1 px-6 hover:bg-purple font-openSans font-semibold"
          >
            Hub Admin
          </button>
        ) : null}

        {state.user.id != '' ? null : (
          <button
            onClick={() => navigate('/login')}
            className=" text-white text-[1vw] border-2 border-purple py-1 px-6 hover:bg-purple font-openSans font-semibold"
          >
            Login
          </button>
        )}

        <button
          onClick={() => {
            cartCount >= 1 ? navigate('/cart') : null
          }}
          className=" text-white text-[1vw] bg-purple  px-6 -ml-4 hover:bg-purple/75 font-openSans font-semibold peer"
        >
          Carrinho
        </button>
        <span className=" text-white text-[1vw] border-2 border-purple py-1 px-4 -ml-8 font-openSans font-semibold peer-hover:border-purple/75">
          {cartCount}
        </span>
      </div>
    </div>
  )
}
