import { ChangeEvent, useState } from 'react';
import './ContainerItems.css'
import Add from '../AddScreen/Add';
import Register from '../RegisterScreen/Register';

type Product = {name: string; amount: string; validity: string}
type ProductType = string

function ContainerItems(props:any) {

  const [registredProducts, setRegistredProducts] = useState<ProductType[]>(['Selecione um produto'])
  const [productRegistred, setProductRegistred] = useState<ProductType>();
  const [selectedProduct, setSelectedProduct] = useState('');
  console.log(selectedProduct)
  const [amount, setAmount] = useState('');
  const [validity, setValidity] = useState('');
  const [products, setProducts] = useState<Product[]>([])

  const handleInputProductChange = (event:any) => {
    setProductRegistred(event.target.value);
  };

  const handleSelectedProduct = (event:any) => {
    const selectedValue = event.target.value;
    setSelectedProduct(selectedValue);
  };

  const handleInputAmountChange = (event:ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleInputValidityChange = (event:ChangeEvent<HTMLInputElement>) => {
    setValidity(event.target.value);
  };

  function onPressAdd() {
    const novoObjeto = {  name: selectedProduct, amount, validity };
    setProducts(state => [...state, novoObjeto])
    setAmount('')
    setValidity('')
    setSelectedProduct(registredProducts[0])
  }
  
  function onPressRegister() {
    if(!productRegistred) {
      return null
    }
    setRegistredProducts([...registredProducts, productRegistred])
    setProductRegistred('')
  }


  return (
      <div className='container-items'>
        {props.add &&
          <Add handleSelectedProduct={handleSelectedProduct} selectedProduct={selectedProduct} registredProducts={registredProducts} amount={amount} validity={validity} handleInputAmountChange={handleInputAmountChange} handleInputValidityChange={handleInputValidityChange} onPressAdd={onPressAdd}></Add>
        }
        {props.register &&
          <Register productRegistred={productRegistred} amount={amount} validity={validity} onPressRegister={onPressRegister} handleInputProductChange={handleInputProductChange}></Register>
        }
        {props.list &&
          <ul className='products-list'>
            {!!products.length && products.map((product) => (
              <li key={product.name} className='product'>
                <span>
                  <strong>
                    Nome:
                  </strong>
                  {product.name}
                </span>
                <span>
                  <strong>
                    Quantidade:
                  </strong>
                  {product.amount}
                </span>
                <span>
                  <strong>
                    Validade:
                  </strong>
                  {product.validity}
                </span>
              </li>
            ))}
          </ul>
        }
      </div>
  )
}

export default ContainerItems
