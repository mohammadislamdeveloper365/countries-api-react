import React, { Component } from 'react';
import './Country.css';

class Country extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, capitalCity, country : {population, continents}, img} = this.props;
        
        return (
            <div className='country'>
                <h1 className='country-header country-description'>Name: {name}</h1>
                <p className='country-description'>Capital: {capitalCity}</p>
                <p className='country-description'>Population: {population}</p>
                <p className='country-description'>Continents: {continents}</p>
                <img src={img} alt="country flag" className='country-flag'/>
            </div>
        );
    }
}

export default Country;