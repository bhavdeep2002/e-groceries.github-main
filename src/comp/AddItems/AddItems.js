import React from 'react'
import axios from 'axios'

export default function AddItem(id,setSever,serverUpdate,change){
    axios.patch("http://localhost:8080/addtocart", {_id:id,update:change},{headers:{
        "Content-Type": "application/json"
         }})
         .then((res) => {
            setSever(!serverUpdate)
         })
         .catch((e) => {
             console.log(e.message);
         });
}