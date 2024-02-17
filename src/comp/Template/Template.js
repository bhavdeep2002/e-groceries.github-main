import React from 'react'
import FrontProduct from '../FrontProduct/FrontProduct'
export default function Template() {
  return (
    <>
    <div className="container-flex background-color">
    <div className="row">
      <div className="col-md-12 upper-margin"></div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="container">
          <div className="row">
            <FrontProduct />
          </div>
        </div>
      </div>

    </div>
    </div>
    </>
  )
}
