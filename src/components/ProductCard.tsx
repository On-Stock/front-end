import { useState } from 'react'

interface ProductProps {
  name: string
  price: string
  image: string
  stars: string
  setCartCount: React.Dispatch<React.SetStateAction<number>>
}

export function ProductCard({ image, name, price, setCartCount, stars }: ProductProps) {
  const [buttonState, setButtonState] = useState('+')

  function ChangeButtonState() {
    if (buttonState === '+') {
      setButtonState('-')
      setCartCount((cartCount: number) => cartCount + 1)
    } else {
      setButtonState('+')
      setCartCount((cartCount: number) => cartCount - 1)
    }
  }

  return (
    <a className="w-[300px] h-[400px] bg-productDiv flex flex-col justify-center items-center px-6 py-10">
      <img
        src={image}
        alt="Brio Webcam"
        className="max-w-full bg-productBack h-full object-scale-down"
      />
      <p className="text-start text-paragraph font-medium text-lg mt-2 w-full ">{name}</p>

      <div className="flex items-center">
        <div className="flex flex-col">
          <span className="font-medium text-lg text-purple text-start w-full  mt-2 mb-1">
            R${price}
          </span>

          <img src={stars} alt="Rating" className=" pr-32" />
        </div>
        <button
          onClick={() => ChangeButtonState()}
          className="w-20 h-12 bg-purple rounded-full text-white font-openSans text-3xl mt-2 leading-[0px]"
        >
          {buttonState}
        </button>
      </div>
    </a>
  )
}
