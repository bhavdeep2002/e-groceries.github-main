import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { AlertMessage, Detail, FrontImage } from '../ProductDetail/ProductDetail';
import AddItems from '../AddItems/AddItems';

export default function Addtocartbtn() {
    const {setalert} = useContext(AlertMessage);
    const {name} =useContext(Detail)
    const {_id} =useContext(FrontImage)
    const [serverUpdate, setServer] = useState(false);

    useEffect(() => {
        if(serverUpdate){
            AddItems(_id,setServer,serverUpdate,1)
        }  

    }, [serverUpdate]);
    
    function message() {
        swal({
            position: 'top-end',
            icon: 'success',
            title: `Your item ${name} has been added to cart`,
            showConfirmButton: false,
            timer: 1500
        });
        setalert(`${name} has been added to cart`)
        document.getElementById('alert').style.display="block"

        setServer(true)
    }

    return (
        <div className="row">
            <div className='col-md-12'>
                <div>
                    <button  onClick={() => { message();}}
                    style={{ backgroundColor: "#6a9739" }}
                    className='btn btn-success addtocart'>ADD TO CART</button>         
                </div>
            </div>
        </div>
    );
}