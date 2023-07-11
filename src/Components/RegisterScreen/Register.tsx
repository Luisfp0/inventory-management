function Register(props:any) {
  return (
    <div className='register'>
      <div className='add-list'>
        <h1 className='titulo'>Cadastrar novo produto</h1>
        <div className='options'>
          <span>Produto:</span>
          <input type='text' placeholder='Nome do produto' className='input-products' value={props.product} onChange={props.handleInputProductChange}/>
        </div>
        <div className='options'>
          <span>Valor:</span>
          <input placeholder='Valor do produto' className='input-products' value={props.amount} onChange={props.handleInputAmountChange}/>
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

export default Register