import React, { useContext } from 'react'
import Addtocartbtn from '../Addtocartbtn/Addtocartbtn'
import { Detail } from '../ProductDetail/ProductDetail'
export default function Addtocart() {
  const {name,price,description} =useContext(Detail)//useContext is a hook that can use context provided by compoment as specified

  return (
    <div className='name'>
      <h1 className='product_title' >{name}</h1>
      <p><b style={{ fontSize: '1.5rem', fontWeight: '700' }}>{price}</b>
      + Free Shipping <br />{description}</p>
      <Addtocartbtn name={name}/>
    </div>
  )
}