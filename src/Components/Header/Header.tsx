import './header.css'

function Header(props:any) {

  return (
    <>
      <div className='header'>
        <button onClick={props.clickAdd}>Adicionar ao estoque</button>
        <button onClick={props.clickRegister}>Registrar</button>
        <button onClick={props.clickList}>Lista de produtos</button>
      </div>
    </>
  )
}

export default Header
