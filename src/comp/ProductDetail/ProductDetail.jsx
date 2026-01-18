import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import FrontProduct from "../FrontProduct/FrontProduct.js"
import { home,port } from "../port/port.js";

const AlertMessage = createContext()
const Detail = createContext()// name,price,description
const FrontImage = createContext() // _id,image

export default function ProductDetail() {
  const { _id } = useParams()
  const [product, setProduct] = useState({})
  const [alerttext, setalert] = useState("")

  useEffect(() => {
    console.log(port)
    axios.get(`${port}/ProductDetail/${_id}`)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

  return (<>
    <div className="container-flex background-color">
      <div className="row">
        <div className="col-md-12 upper-margin"><div className="alert alert-success" id='alert' role="alert">
          {alerttext} <Link to={`${home}/ViewCart`}><button type="button" className="viewcart">VIEW CART</button></Link>
        </div></div>
      </div>
      <Detail.Provider value={{ name: product.name, price:product.price, description: product.description }}>{/*Detail is a component that can provide the context to FrontProduct or its child specifically */}
        <FrontImage.Provider value={{_id:product._id,image:product.image}}>
          <AlertMessage.Provider value={{ setalert: setalert }}>
            <FrontProduct />
          </AlertMessage.Provider>
        </FrontImage.Provider>
      </Detail.Provider>
      <Outlet />{/* this is where our child componet(Description) will render in our parent component */}
    </div>
  </>)
}
export { AlertMessage, Detail, FrontImage }