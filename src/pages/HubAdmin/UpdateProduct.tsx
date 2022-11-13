import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../../services/api'

export default function UpdateProduct() {
  const navigate = useNavigate()
  const location = useLocation()

  const [product, setProduct] = useState<[]>([])

  const [productName, setProductName] = useState<string>('')
  const [productPrice, setProductPrice] = useState<number>(0)
  const [productDescription, setProductDescription] = useState<string>('')
  const [productPhoto, setProductPhoto] = useState<string>('')
  const [productAmount, setProductAmount] = useState<number>(0)

  let id = location.state.id

  useEffect(() => {
    axios.get(`http://localhost:3000/getUniqueProduct/${id}`).then(response => {
      setProduct(response.data)
      setProductName(response.data.name)
      setProductPrice(response.data.price)
      setProductDescription(response.data.description)
      setProductPhoto(response.data.photo)
      setProductAmount(response.data.amount)
    })
  }, [])

  async function handleUpdateProduct(event: FormEvent) {
    event.preventDefault()

    const data = {
      id: id,
      name: productName,
      price: productPrice,
      description: productDescription,
      photo: productPhoto,
      amount: productAmount,
    }
    if (
      productName != '' &&
      productPrice >= 0 &&
      productPhoto != '' &&
      productAmount >= 0
    ) {
      const response = await api.post('/updateProduct', data)
      alert(response.data)
      navigate('/hubAdmin/consultProducts')
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
          onSubmit={handleUpdateProduct}
          method="post"
          className="-mt-4 flex flex-col w-96 text-white text-left gap-4 text-2xl "
        >
          <h2 className="text-white font-semibold text-4xl mt-6 bg-purple py-4 text-center">
            Alterar Produto
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
              value={productPhoto}
              onChange={e => setProductPhoto(e.target.value)}
              placeholder="Endereço da Imagem"
              className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
            />
            {productPhoto ? (
              <img src={productPhoto} className="w-96 mt-4 bg-productBack" />
            ) : null}
          </div>

          <div className="flex justify-between">
            <button
              type="reset"
              onClick={() => {
                setProductName('')
                setProductPrice(0)
                setProductDescription('')
                setProductPhoto('')
              }}
              className=" w-[30%] text-white text-[1vw] border-2 border-red-600 py-1 px-6 hover:bg-red-600 font-openSans font-semibold"
            >
              Limpar
            </button>

            <button
              type="submit"
              className=" w-[68%] text-white text-[1vw] border-2 border-green-600 py-1 px-6 hover:bg-green-600 font-openSans font-semibold"
            >
              Alterar Produto
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
