import React from 'react'
import './DubleProducts.css'

function DubleProducts({imgr, imgl, titlel, titler}) {
  return (
    <div className ='dubleproducts'>
      <div className='dubleproducts__left'>
        <img src={imgl} alt=''/>
        <div className='dubleproducts__lefttitle'>{titlel}</div>
      </div>
      <div className='dubleproducts__right'>
        <img src={imgr} alt=''/>
        <div className='dubleproducts__righttitle'>{titler}</div>
      </div>
    </div>
  )
}

export default DubleProducts
