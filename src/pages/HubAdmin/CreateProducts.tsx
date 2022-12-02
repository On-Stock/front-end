import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

export default function CreateProduct() {
  const navigate = useNavigate()

  const [productName, setProductName] = useState<string>('')
  const [productPrice, setProductPrice] = useState<number>(0)
  const [productDescription, setProductDescription] = useState<string>('')
  const [productImage, setProductImage] = useState<string>('')
  const [productAmount, setProductAmount] = useState<number>(0)

  async function handleCreateProduct(event: FormEvent) {
    event.preventDefault()

    const data = {
      name: productName,
      price: productPrice,
      description: productDescription,
      photo: productImage,
      amount: productAmount,
    }
    if (
      productName != '' &&
      productPrice >= 0 &&
      productImage != '' &&
      productAmount >= 0
    ) {
      const response = await api.post('/createProduct', data)
      if (response.status === 201) {
        alert('Produto criado com sucesso')
        console.log(response.data.name)
      } else {
        alert('Erro ao criar produto')
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
      <div className="flex flex-col items-center text-center ">
        <form
          onSubmit={handleCreateProduct}
          method="post"
          className="-mt-4 flex flex-col w-96 text-white text-left gap-4 text-2xl "
        >
          <h2 className="text-white font-semibold text-4xl mt-6 bg-purple py-4 text-center">
            Criar Produto
          </h2>
          <div>
            <label htmlFor="name" className="clear-both mr-10">
              Nome
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={e => setProductName(e.target.value)}
              value={productName}
              id="name"
              placeholder="Nome do Produto"
              className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
            />
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              name="description"
              value={productDescription}
              onChange={e => setProductDescription(e.target.value)}
              id="description"
              placeholder="Descrição do Produto"
              className=" h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
            />
          </div>

          <div>
            <label htmlFor="price" className="clear-both w-full">
              Preço
            </label>
            <input
              type="number"
              name="price"
              required
              value={productPrice}
              onChange={e => setProductPrice(e.target.valueAsNumber)}
              id="price"
              placeholder="Preço do Produto (Ex: 10.00)"
              className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
            />
          </div>
          <div>
            <label htmlFor="amount" className="clear-both w-full">
              Quantidade
            </label>
            <input
              type="number"
              name="amount"
              required
              value={productAmount}
              onChange={e => setProductAmount(e.target.valueAsNumber)}
              id="price"
              placeholder="Preço do Produto (Ex: 10.00)"
              className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
            />
          </div>
          <div>
            <label htmlFor="photo" className="clear-both w-full">
              Imagem
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              required
              value={productImage}
              onChange={e => setProductImage(e.target.value)}
              placeholder="Endereço da Imagem"
              className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
            />
            {productImage ? (
              <img src={productImage} className="w-96 mt-4 bg-productBack" />
            ) : null}
          </div>

          <div className="flex justify-between">
            <button
              type="reset"
              onClick={() => {
                setProductName('')
                setProductPrice(0)
                setProductDescription('')
                setProductImage('')
              }}
              className=" w-[30%] text-white text-[1vw] border-2 border-red-600 py-1 px-6 hover:bg-red-600 font-openSans font-semibold"
            >
              Limpar
            </button>

            <button
              type="submit"
              className=" w-[68%] text-white text-[1vw] border-2 border-green-600 py-1 px-6 hover:bg-green-600 font-openSans font-semibold"
            >
              Criar Produto
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
