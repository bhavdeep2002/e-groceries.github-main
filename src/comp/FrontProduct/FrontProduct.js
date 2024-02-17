import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Addtocart from '../Addtocart/Addtocart'
import { FrontDetail } from '../ProductDetail/ProductDetail'

export default function FrontProduct(props) {
  const {id,image} =useContext(FrontDetail)
  return (
    <>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="container-flex">
            <div className="row">
              <div className="col-md-6"><img id='bestselling' src={image} alt="" /></div>
              <div className="col-md-6"><Addtocart /></div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{ height: "80px" }}></div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <Link to={`/Productprops/${id}/Description`}>Description</Link> {/* the path in 'to={}' is going to pasted insse url only. from where our Route will match the the corresponding path */}
                {/*and useParams returning an object which contains s property and we are just destructured that object to get s property */}
              </div>
              <div className="col-md-1">
                <Link to={`/Productprops/${id}/Review`}>Review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>)
}