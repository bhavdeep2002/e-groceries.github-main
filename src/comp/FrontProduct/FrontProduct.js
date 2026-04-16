import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FrontText from '../FrontText/FrontText'
import { FrontImage } from '../ProductDetail/ProductDetail'

export default function FrontProduct() {
  const {_id,image} =useContext(FrontImage)
  return (
    <>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="container-flex">
            <div className="row">
              <div className="col-md-6"><img id='bestselling' src={image} alt="" /></div>
              <div className="col-md-6"><FrontText /></div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{ height: "80px" }}></div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>)
}