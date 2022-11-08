import { ProductCard } from './ProductCard'
import Brio from '../assets/products/brio.png'
import C920 from '../assets/products/c920.webp'
import Deck from '../assets/products/deck.webp'
import Hyperx from '../assets/products/hyperx.jpg'
import Linkpro from '../assets/products/linkpro.png'
import Michyper from '../assets/products/michyper.png'
import Stars5 from '../assets/stars5.svg'
import Stars4 from '../assets/stars4.svg'
import Stars3 from '../assets/stars3.svg'
import Stars2 from '../assets/stars2.svg'
import Stars1 from '../assets/stars1.svg'

interface StockProps {
  setCartCount: React.Dispatch<
    React.SetStateAction<
      {
        id?: string | undefined
        image: string
        price: string
      }[]
    >
  >
}

export function Stock({ setCartCount }: StockProps) {
  return (
    <div className="w-full flex px-10 mt-10 justify-between">
      <div className="flex flex-col border w-[70vw] border-purple mr-2 h-fit">
        <h2 className="text-white px-4 font-semibold mb-4 mt-4">Categorias</h2>
        <a
          href=""
          className="text-purple hover:bg-purple hover:text-white px-4 py-4 w-full border-y border-purple"
        >
          Microfones
        </a>
        <a className="text-purple hover:bg-purple hover:text-white px-4 py-4 w-full border-y border-purple">
          Webcams
        </a>
        <a className="text-purple hover:bg-purple hover:text-white px-4 py-4 w-full border-y border-purple">
          Câmeras
        </a>
        <a className="text-purple hover:bg-purple hover:text-white px-4 py-4 w-full border-y border-purple">
          Placas de Captura
        </a>
        <a className="text-purple hover:bg-purple hover:text-white px-4 py-4 w-full border-y border-purple">
          Luzes para Cenário
        </a>
        <a className="text-purple hover:bg-purple hover:text-white px-4 py-4 w-full border-y border-purple">
          Tela Verde
        </a>
        <a className="text-purple hover:bg-purple hover:text-white px-4 py-4 w-full border-y border-purple">
          Headsets
        </a>
        <a className="text-purple hover:bg-purple hover:text-white px-4 py-4 w-full border-y border-purple">
          Acessórios
        </a>
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center ">
        <ProductCard
          image={C920}
          name="Webcam C922 Logitech"
          price="350.99"
          stars={Stars3}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Michyper}
          name="QuadCast HyperX"
          price="860.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Brio}
          name="Webcam BRIO Logitech"
          price="1050.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Hyperx}
          name="HyperX Cloud Stinger"
          price="230.00"
          stars={Stars4}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Deck}
          name="Stream Deck Elgato"
          price="850.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Linkpro}
          name="Linkpro Elgato"
          price="1990.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Hyperx}
          name="HyperX Cloud Stinger"
          price="230.00"
          stars={Stars4}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Deck}
          name="Stream Deck Elgato"
          price="850.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Linkpro}
          name="Linkpro Elgato"
          price="1990.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Hyperx}
          name="HyperX Cloud Stinger"
          price="230.00"
          stars={Stars4}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Deck}
          name="Stream Deck Elgato"
          price="850.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Linkpro}
          name="Linkpro Elgato"
          price="1990.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Hyperx}
          name="HyperX Cloud Stinger"
          price="230.00"
          stars={Stars4}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Deck}
          name="Stream Deck Elgato"
          price="850.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />

        <ProductCard
          image={Linkpro}
          name="Linkpro Elgato"
          price="1990.00"
          stars={Stars5}
          setCartCount={setCartCount}
        />
      </div>
    </div>
  )
}
