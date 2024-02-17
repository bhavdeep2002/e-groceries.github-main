import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { AlertMessage, Detail, FrontDetail } from '../ProductDetail/ProductDetail'; // Import AlertMessage context
import axios from 'axios';

export default function Addtocartbtn() {
    const {setalert} = useContext(AlertMessage);
    const {name ,price} =useContext(Detail)
    const {image} =useContext(FrontDetail)
    const [isDataUpdated, setIsDataUpdated] = useState(false);
    const [item,setitem] =useState({})

    useEffect(() => {
        // Check if item state is updated and not empty
        if(isDataUpdated){
            axios.post("http://localhost:3012/cart", item)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
        }  

    }, [isDataUpdated,item]);
    
    function message() {
        swal({
            position: 'top-end',
            icon: 'success',
            title: `Your item ${name} has been added to cart`, // Fix the interpolation syntax here
            showConfirmButton: false,
            timer: 1500
        });
        setalert(`${name} has been added to cart`)
        document.getElementById('alert').style.display="block"

        setitem({name,price,image})
        setIsDataUpdated(true)
    }

    function quantity(){
        
    }

    return (
        <div className="row">
            <div className='col-md-12'>
                <div>
                    <input
                        onClick={() => { message(); quantity(itemName); }}
                        style={{ backgroundColor: "#6a9739" }}
                        className='btn btn-success addtocart'
                        type="submit"
                        value="ADD TO CART"
                    />
                </div>
            </div>
        </div>
    );
}