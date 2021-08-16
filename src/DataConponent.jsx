import React from 'react';
import style from './App.module.css'
const DataComponent = (props) => {
    
    console.log(props.ipData)

    return(
        <div className={style.ip__data}>
            <p>{props.ipData.ip}</p>
            <p>{props.ipData.version}</p>
            <p>{props.ipData.city}</p>
            <p>{props.ipData.region}</p>
            <p>{props.ipData.region_code}</p>
            <p>{props.ipData.country_code}</p>
            <p>{props.ipData.country_code_iso3}</p>
            <p>{props.ipData.country_name}</p>
            <p>{props.ipData.country_capital}</p>
            <p>{props.ipData.country_tld}</p>
            <p>{props.ipData.continent_code}</p>
            <p>{props.ipData.in_eu}</p>
            <p>{props.ipData.postal}</p>
            <p>{props.ipData.latitude}</p>
            <p>{props.ipData.longitude}</p>
            <p>{props.ipData.timezone}</p>
            <p>{props.ipData.utc_offset}</p>
            <p>{props.ipData.country_calling_code}</p>
            <p>{props.ipData.currency}</p>
            <p>{props.ipData.currency_name}</p>
            <p>{props.ipData.languages}</p>
            <p>{props.ipData.country_area}</p>
            <p>{props.ipData.country_population}</p>
            <p>{props.ipData.asn}</p>
            <p>{props.ipData.org}</p>
            
        </div>
    )
}

export default DataComponent;







