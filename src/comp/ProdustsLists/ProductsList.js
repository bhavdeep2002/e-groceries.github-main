import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Headingh2 from "../Headingh2/Headingh2"
import Product from "../Product/Product"
import { port } from "../port/port";


export default function ProductsList({urltype,heading}){

    const [products,setProducts] =useState([])
    useEffect(()=>{
      console.log(port)
        axios.get(`${port}/${urltype}`)
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((e)=>{
            console.log(e.message)
        })
    },[])

    return(
        <>
        <section>
                <Headingh2 heading={heading} />

                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">
                                {products && products.map((p,index) => {
                                    return (
                                     <div className="col-md-3"> <Product _id={p._id} key={index} name={p.name} price={p.price} category={p.category} image={p.image}  /></div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}