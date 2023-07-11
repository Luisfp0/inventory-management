import Header from './Components/Header/Header'
import ContainerItems from './Components/ContainerItems/ContainerItems';
import { useState } from 'react'
import './reset.css';
import './app.css'


function App() {
  const [add, setAdd] = useState(false)
  const [register, setRegister] = useState(false)
  const [list, setList] = useState(false)


  function clickAdd() {
    setAdd(true)
    setRegister(false)
    setList(false)
  }

  function clickRegister() {
    setRegister(true)
    setAdd(false)
    setList(false)
  }

  function clickList() {
    setList(true)
    setAdd(false)
    setRegister(false)
  }

  return (
    <>
      <div className='section'>
        <Header clickAdd={clickAdd} clickRegister={clickRegister} clickList={clickList} />
        <ContainerItems add={add} register={register} list={list} />
      </div>
    </>
  )
}

export default App
