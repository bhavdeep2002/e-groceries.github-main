// src/components/FilterBarBootstrap.js
import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterBarBootstrap = ({ onFilterChange }) => {
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPriceRange({ ...priceRange, [name]: value });
    };

    const applyFilter = () => {
        onFilterChange(priceRange);
    };

    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>Min Price</InputGroup.Text>
            <FormControl
                type="number"
                name="min"
                value={priceRange.min}
                onChange={handleInputChange}
                placeholder="Min Price"
            />
            <InputGroup.Text>Max Price</InputGroup.Text>
            <FormControl
                type="number"
                name="max"
                value={priceRange.max}
                onChange={handleInputChange}
                placeholder="Max Price"
            />
            <Button variant="primary" onClick={applyFilter}>Apply</Button>
        </InputGroup>
    );
};

export default FilterBarBootstrap;
