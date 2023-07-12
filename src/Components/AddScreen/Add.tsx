import { ChangeEvent } from "react"
import './add.css'


type Props = {
  registredProducts: string[]
  amount: string
  validity: string
  selectedProduct: string
  handleInputAmountChange: (event:ChangeEvent<HTMLInputElement>) => void
  handleInputValidityChange: (event:ChangeEvent<HTMLInputElement>) => void
  handleSelectedProduct: (event:ChangeEvent<HTMLSelectElement>) => void
  onPressAdd: () => void
}

function Add(props:Props) {
  return (
    <div className='add-list'>
      <h1 className='title'>Adicionar novo produto</h1>
      <div className='options'>
        <span>Produto:</span>
        <select className="option-select" value={props.selectedProduct} onChange={props.handleSelectedProduct}>
          {
            props.registredProducts.map((item) => (
              <option>{item}</option>
            ))
          }
        </select>
      </div>
      <div className='options'>
        <span>Quantidade:</span>
        <input placeholder='Quantidade de produtos para adicionar' className='input-products' value={props.amount} onChange={props.handleInputAmountChange}/>
      </div>
      <div className='options'>              
        <span>Validade:</span>
        <input placeholder='Quantidade de produtos para adicionar' className='input-products' value={props.validity} onChange={props.handleInputValidityChange}/>
      </div>
      <button className='add-product' onClick={props.onPressAdd}>Adicionar</button>
    </div>
  )
}

export default Add