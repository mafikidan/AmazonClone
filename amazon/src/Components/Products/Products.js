import React from 'react'
import './Products.css'
import DubleProducts from '../DubleProduct/DubleProducts'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div className='products'>
        <Link className='no-underline' to={'/products'}>
      <div className='products__title'>
        Gaming accessories
      </div>
      <div className='products__row'>
        <DubleProducts 
        imgr= 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
        imgl='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
        titlel= 'Headsets'
        titler='Keyboards'
        />
        
        <DubleProducts
        imgr= 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg'
        imgl='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg'
        titlel= 'Computer mice'
        titler='Chair'
        />
      </div>
      <div className='products__link'>see more</div>
        </Link>
    </div>
  )
}

export default Products
