import React from 'react'
import axios from 'axios'
import { port } from '../port/port';

export default function AddItem(id,setSever,serverUpdate,change){
  
    axios.patch(`${port}/addtocart`, {_id:id,update:change},{headers:{
        "Content-Type": "application/json"
         }})
         .then((res) => {
            setSever(!serverUpdate)
         })
         .catch((e) => {
             console.log(e.message);
         });
}