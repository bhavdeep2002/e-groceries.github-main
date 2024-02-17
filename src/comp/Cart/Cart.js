import React from 'react'
import TableCart from '../TableCart/TableCart'

export default function Cart() {
  return (
    <div className="container-flex background-color">
      <div className="row">
        <div className="col-md-12 upper-margin">
          <div className="alert alert-success" id='alert' role="alert">

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1">1</div>
        <div className="col-md-10"><h1>Cart</h1>
          <TableCart />
        </div>
        <div className="col-md-1">3</div>
      </div>
    </div>
  )
}