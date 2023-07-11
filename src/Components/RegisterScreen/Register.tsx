

function Register(props:any) {
  return (
    <div className='register'>
      <div className='add-list'>
        <h1 className='titulo'>Cadastrar novo produto</h1>
        <div className='options'>
          <span>Produto:</span>
          <input type='text' placeholder='Nome do produto' className='input-products' value={props.product} onChange={props.handleInputProductChange}/>
        </div>
          <button className='addProduct' onClick={props.onPressRegister}>Adicionar</button>
        </div>
    </div>
  )
}

export default Register