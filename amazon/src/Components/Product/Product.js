import React from 'react'
import "./Product.css"
import { useStateValue } from '../../StateProvider'
import Row from 'react-bootstrap/Row';

function Product({id, title, image, price, rating}) {
  const [{ basket }, dispatch]= useStateValue()
  console.log(basket)
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    // <Row xs={1} md={2} className="g-2">
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
            {Array(rating)
            .fill()
            .map(()=>(
                <p>🌟</p>
            ))}          
        </div>
        
      </div>
        <img src={image} alt=''  />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
      // </Row>
  )
}

export default Product
