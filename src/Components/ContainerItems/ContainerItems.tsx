import { ChangeEvent, useState } from 'react';
import './ContainerItems.css'
import Add from '../AddScreen/Add';
import Register from '../RegisterScreen/Register';

type Product = {name: string; amount: string; validity: string}
type ProductType = string

function ContainerItems(props:any) {

  const [registredProducts, setRegistredProducts] = useState<ProductType[]>([])
  const [productRegistred, setProductRegistred] = useState<ProductType>();

  const handleInputProductChange = (event:any) => {
    setProductRegistred(event.target.value);
  };

  function onPressRegister() {
    if(!productRegistred) {
      return null
    }
    setRegistredProducts([...registredProducts, productRegistred])
  }

  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [validity, setValidity] = useState('');

  const [products, setProducts] = useState<Product[]>([])


  const handleInputAmountChange = (event:ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };
  const handleInputValidityChange = (event:ChangeEvent<HTMLInputElement>) => {
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
          <Add registredProducts={registredProducts} amount={amount} validity={validity} handleInputAmountChange={handleInputAmountChange} handleInputValidityChange={handleInputValidityChange} onPressAdd={onPressAdd}></Add>
        }
        {props.register &&
          <Register amount={amount} validity={validity} onPressRegister={onPressRegister} handleInputProductChange={handleInputProductChange}></Register>
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
