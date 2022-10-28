import Map from '../assets/map.jpg'

export function About() {
  return (
    <div className="bg-about w-full h-[450px] px-10">
      <h1 className="text-[2vw] text-white font-bold whitespace-nowrap w-[13vw] bg-black px-4 py-2 mt-10 mb-5 ">
        ON STOCK
      </h1>
      <div className="flex flex-row gap-20 justify-between">
        <div className="flex flex-col w-[25vw]">
          <h2 className="font-medium text-[3vw] text-white mb-2">Sobre Nós</h2>
          <p className="text-white font-medium text-[1vw]">
            Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim
            luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed
            ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis
            vulputate lacinia nec neque. Aenean
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium text-[3vw] text-white mb-2">Nos Visite</h2>
          <img src={Map} alt="Location" className="w-[20vw]" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium text-[3vw] text-white mb-2">Acesso Rápido</h2>
          <a href="" className="text-purple text-[1.7vw] underline">
            Home
          </a>
          <a href="" className="text-purple text-[1.7vw] underline">
            Mais Vendidos
          </a>
          <a href="" className="text-purple text-[1.7vw] underline">
            Categorias
          </a>
          <a href="" className="text-purple text-[1.7vw] underline">
            Sobre
          </a>
          <a href="" className="text-purple text-[1.7vw] underline">
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  )
}
