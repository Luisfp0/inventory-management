import { useState } from 'react';
import './ContainerItems.css'
import Add from '../AddScreen/Add';
import Register from '../RegisterScreen/Register';

type Product = {name: string; amount: string; validity: string}


function ContainerItems(props:any) {

  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [validity, setValidity] = useState('');

  const [products, setProducts] = useState<Product[]>([])

  const handleInputProductChange = (event:any) => {
    setProduct(event.target.value);
  };
  const handleInputAmountChange = (event:any) => {
    setAmount(event.target.value);
  };
  const handleInputValidityChange = (event:any) => {
    setValidity(event.target.value);
  };

  function onPressAdd() {
    const novoObjeto = {  name: product, amount, validity };
    setProducts(state => [...state, novoObjeto])
  }

  

  return (
    <>
      <div className='containerItems'>
        {props.add &&
          <Add amount={amount} validity={validity} handleInputAmountChange={handleInputAmountChange} handleInputValidityChange={handleInputValidityChange} onPressAdd={onPressAdd}></Add>
        }
        {props.register &&
        <Register amount={amount} validity={validity} handleInputAmountChange={handleInputAmountChange} handleInputValidityChange={handleInputValidityChange} onPressAdd={onPressAdd}></Register>
        }
        {props.list &&
        <div className='productsList'>
          <ul>
            {!!products.length && products.map((product) => (
              <li className='products-list' key={product.name}>
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
        </div>
        }
      </div>
    </>
  )
}

export default ContainerItems
