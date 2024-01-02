import React, { Component } from 'react';
import './Country.css';

class Country extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name = {} , capital = '', population = '', continents = [], flags = '' } = this.props?.country ?? {};
        const { common = ''} = name;
        
        return (
            <div className='country'>
                <h1 className='country-header country-description'>Name: {common}</h1>
                <p className='country-description'>Capital: {capital}</p>
                <p className='country-description'>Population: {population}</p>
                <p className='country-description'>Continents: {continents[0]}</p>
                <img src={flags?.png} alt="country flag" className='country-flag'/>
            </div>
        );
    }
}

export default Country;