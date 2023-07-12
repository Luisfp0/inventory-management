import './Register.css'

function Register(props:any) {
  console.log(props.productRegistred)
  return (
    <div className='register'>
      <div className='question-list'>
        <h1 className='title'>Cadastrar novo produto</h1>
        <div className='options'>
          <span>Produto:</span>
          <input type='text' placeholder='Nome do produto' className='input-products' value={props.productRegistred} onChange={props.handleInputProductChange}/>
        </div>
        <button className='add-product' onClick={props.onPressRegister}>Registrar</button>
      </div>
    </div>
  )
}

export default Register