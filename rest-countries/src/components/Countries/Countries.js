import React, { Component } from 'react';
import './Countries.css';
import Country from '../Country/Country';

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
                {countries.map(country=> <Country {...this.getCountryProps(country)} key={country.cca3}/>)}
            </div>
        );
    }

    getCountryProps(country) {
        const name = country?.name?.common;
        const capitalCity = country?.capital?.[0];
        const img = country?.flags?.png;
        const population = country?.popluation;

        return {
            key: country.cca3,
            capitalCity,
            country,
            name,
            population,
            img
        }
    }
}


export default Countries;