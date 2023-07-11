function Add(props:any) {
  return (
    <div className='add'>
            <div className='add-list'>
              <h1 className='titulo'>Adicionar novo produto</h1>
              <div className='options'>
                <span>Produto:</span>
                <select>
                  <option value="vermelho">Vermelho</option>
                  <option value="azul">Azul</option>
                  <option value="verde">Verde</option>
                  <option value="amarelo">Amarelo</option>
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