import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { AlertMessage, Detail, FrontDetail } from '../ProductDetail/ProductDetail'; // Import AlertMessage context
import axios from 'axios';

export default function Addtocartbtn() {
    // here i have used context if i use props, then this component's immedgate parent should contain all this props ,so if its immedgate parents have this then its grandparent should also have all this props ,so if i want to use props then i have to send props to all the child to have access to last grand child
    
    //but by using context hook i can sepecify which component should contain how much context/data ,this leads to components having only required information instead of having all the contexts
    const {setalert} = useContext(AlertMessage);
    const {name ,price} =useContext(Detail)
    const {image} =useContext(FrontDetail)
    const [isDataUpdated, setIsDataUpdated] = useState(false);
    const [item,setitem] =useState({})

    useEffect(() => {
        // Check if item state is updated and not empty
        if(isDataUpdated){//this will not executed until/unless isDataUpdated is true, this protects unnessary rows in tablecart when ever Addtocartbtn has been rendered 
            axios.post("http://localhost:3012/cart", item)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
        }  

    }, [isDataUpdated,item]);// this will executed when ever from these two states has been changed
    
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

    function quantity(name){
        // Check if the item already exists in the list
        axios.get("http://localhost:3012/cart")
        .then((res) => {
            console.log(res.data);
        })
        .catch((e) => {
            console.log(e);
        });
    // const existingItem = item.find(item => item.name === name);
    }

    return (
        <div className="row">
            <div className='col-md-12'>
                <div>
                    <input
                        onClick={() => { message(); quantity(name); }}
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