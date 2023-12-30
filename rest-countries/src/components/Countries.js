import React, { Component } from 'react';
import './Countries.css'

class Countries extends Component {
    constructor() {
        super();
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => this.setState({
            countries: data
        }));
        
    }


    render() {
        const { countries }= this.state;
        return (
            <div className='country-container'>
                {countries.map(country=> <Country country={country} key={country.cca3}/>)}
            </div>
        );
    }
}

function Country(props) {
    return (
      <div className='country'>
            <div >Name: {props.country.name.common}</div>
            <div >Capital: {props.country?.capital?.[0]}</div>
            <div >Population: {props.country.population}</div>
            <div >Borders: {props.country?.border}</div>
            <img src= {props.country.flags.png} alt="country-flag"/>
        </div>
    
    )
}

export default Countries;