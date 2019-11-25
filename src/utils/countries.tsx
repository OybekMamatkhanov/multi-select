import React, { useState, useEffect, createContext} from 'react';

type CountriesType = {
    countries: []
};

export const CountriesContext = createContext<CountriesType | null>(null);

export default ({ children }: any) => {
    const countriesUrl = 'http://api.worldbank.org/v2/country/br?format=json';
    const [countries, setCountries] = useState(null);

    const fetchCountries = async() => {
        try {
            const countriesData = await fetch(countriesUrl);
            const countriesFetched = await countriesData.json();
            setCountries(countriesFetched);
            console.log(countriesFetched);
        } catch (e) {
            if (e) {
                console.error(e.message, 'Fetched data failed');
            }
        }
    };

    //console.log(co);

    return <CountriesContext.Provider value={countries}>{ children }</CountriesContext.Provider>;
};