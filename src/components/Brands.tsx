import Elgato from '../assets/brands/elgato-logo.png'
import Logitech from '../assets/brands/Logitech_logo.svg.png'
import Razer from '../assets/brands/razer.png'
import HyperX from '../assets/brands/hyper-x-logo.png'

export function Brands() {
  return (
    <div className="flex flex-row w-full bg-dark items-center py-6  shadow-lg">
      <img src={Elgato} className="w-40 mx-auto invert" />
      <img src={Logitech} className="w-40  mx-auto invert" />
      <img src={Razer} className="w-40  mx-auto" />
      <img src={HyperX} className="w-40  mx-auto" />
    </div>
  )
}
