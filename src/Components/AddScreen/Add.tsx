import { ChangeEvent } from "react"

type Props = {
  registredProducts: string[]
  amount: string
  validity: string
  handleInputAmountChange: (event:ChangeEvent<HTMLInputElement>) => void
  handleInputValidityChange: (event:ChangeEvent<HTMLInputElement>) => void
  onPressAdd: () => void
}

function Add(props:Props) {
  return (
    <div className='add'>
            <div className='add-list'>
              <h1 className='titulo'>Adicionar novo produto</h1>
              <div className='options'>
                <span>Produto:</span>
                <select>
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
              <button className='addProduct' onClick={props.onPressAdd}>Adicionar</button>
            </div>
          </div>
  )
}

export default Add