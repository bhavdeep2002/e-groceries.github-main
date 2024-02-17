import React, { createContext, useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import axios from 'axios'
import FrontProduct from '../FrontProduct/FrontProduct'

const Detail = createContext()//it is a hook that create context/data and sends to the child or grandchild compont specifically
const FrontDetail = createContext()
const AlertMessage =createContext()

export default function ProductDetail() {

  const [alerttext, setalert] = useState("")


  const { id } = useParams() // useParams Hook returns an object of property name specified in <Route path='ProductDetail/:id' element={<ProductDetail /> } > here property name would be id and different product on click pasted different id in url by Link and Route will match the path, destructuring object to get id property
  // console.log(useParams())

  // console.log(useState())// useState always returns us an array containing one object and second function
  const [detail, setdetail] = useState({
    id,
    name: "",
    category: "",
    price: "",
    image: ""
    , description: ""
  })
  // detail ={name: "",price: "",image: "",category: ""}

  useEffect(() => {
    // Code to run when the component is mounted (equivalent to componentDsMount)
    // console.log("front useEffect")
    axios.get(`http://localhost:3012/product/${id}`)
      .then((res) => {
        let re = res.data
        //re contains object insse it 
        // re contains re={id:"",name:"",price:"",category:""} re contains s image,name,price,category of sepecified s in useParams
        // example: {id: 1, name: 'Natural Extracted Edible Oil', price: '£25.00', image: '/image/oil.PNG', category: 'Groceries'}
        // console.log(re)
        const { id, name, price, image, category, description } = re
        //destructuring object properties

        setdetail({ ...detail, name, price, category, image, description })
        // detail={previous properties of detail, overwritting name,category,price property}
      })
  }, []); // dependency array ensures it runs on mount only one time
  return (
    <>
      <div className="container-flex background-color">
        <div className="row">
          <div className="col-md-12 upper-margin"><div className="alert alert-success" id='alert' role="alert">
            {alerttext} <Link to={"http://localhost:3000/ViewCart"}><button type="button" className="viewcart">VIEW CART</button></Link>
          </div></div>
        </div>
        <Detail.Provider value={{ name: detail.name, price: detail.price, description: detail.description }}>{/*Detail is a component that can provide the context to FrontProduct or its child specifically */}
          <FrontDetail.Provider value={{ id: detail.id, image: detail.image }}>
            <AlertMessage.Provider value={{name:detail.name ,setalert:setalert}}>
              <FrontProduct />
            </AlertMessage.Provider>
          </FrontDetail.Provider>
        </Detail.Provider>
        <Outlet />{/* this is where our child componet(Description) will render in our parent component */}
      </div>
    </>
  )
}
export { Detail, FrontDetail ,AlertMessage }