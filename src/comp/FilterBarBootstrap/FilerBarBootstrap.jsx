// src/components/FilterBarBootstrap.js
import React, { useEffect, useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const FilterBarBootstrap = ({setProducts}) => {

    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    useEffect(()=>{
        axios.get("http://localhost:8080/filter",{params:priceRange},{headers:{"Content-Type":"application/json"}})
        .then((res)=>{
            setProducts(res.data)
        })
        .catch(()=>{

        })
    },[priceRange])
    const handleInputChange = (e) => {
        
        const { name, value } = e.target;
        setPriceRange({ ...priceRange, [name]: value.trim() === '' ? '' : Number(value) });
        // priceRange ={max:'',min:''}
        // priceRange ={...priceRange,min:23}
        // // min :23 indicates value to be overright
        // console.log(priceRange)
        // // { max: '', min: 23 }

        // priceRange ={max:'',min:''}
        // priceRange.min =23
        // console.log(priceRange)
        // { max: '', min: 23 }

        //[] This syntax allows you to dynamically set the property key of an object based on the value of a variable.

        // let name = "min";
        // let value = 100;
        // let obj = { [name]: value };  // obj will be { min: 100 }

        // let name = "min";
        // let value = 100;
        // let obj = { name: value };  // obj will be { name: 100 }
    };

    return (
        // InputGroup is component imported from react-bootstrap, it contain a div element with class name input-group
        <InputGroup className="mb-3 mt-3">
            {/*InputGroup.text is another component imported from react-bootstrap, it contains span element with class name input-group-text */}
            <InputGroup.Text>min</InputGroup.Text>
            {/*FormControl is also a component imported from react-bootstrap, it contains input element with class name form-control and all the other attributes added in this component would be added in input tag also*/}
            <FormControl
            type="number"
            name="min"
            onChange={handleInputChange}
            placeholder="Min Price"
            />
            <InputGroup.Text>Max Price</InputGroup.Text>
            <FormControl
                type="number"
                name="max"
                onChange={handleInputChange}
                placeholder="Max Price"
            />
            <Button variant="success" >Apply</Button>
        </InputGroup>
        
    );
};

export default FilterBarBootstrap;
