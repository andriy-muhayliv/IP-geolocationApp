import React from 'react';
import style from './App.module.css'
const DataComponent = (props) => {
    
    console.log(props.ipData)

    return(
        <div className={style.ip__data}>
            <p><span>IP:</span> {props.ipData.ip}</p>
            <p><span>VERSION:</span> {props.ipData.version}</p>
            <p><span>CITY:</span> {props.ipData.city}</p>
            <p><span>REGION:</span> {props.ipData.region}</p>
            <p><span>REGIONT CODE:</span> {props.ipData.region_code}</p>
            <p><span>COUNTRY CODE:</span> {props.ipData.country_code}</p>
            <p><span>ISO:</span> {props.ipData.country_code_iso3}</p>
            <p><span>COUNTRY:</span> {props.ipData.country_name}</p>
            <p><span>COUNTRY CAPITAL:</span> {props.ipData.country_capital}</p>
            <p><span>LTD:</span> {props.ipData.country_tld}</p>
            <p><span>CODE:</span> {props.ipData.continent_code}</p>
            <p><span>IN EU:</span> {props.ipData.in_eu}</p>
            <p><span>POSTAL:</span> {props.ipData.postal}</p>
            <p><span>LATITUDE:</span> {props.ipData.latitude}</p>
            <p><span>LONGITUDE:</span> {props.ipData.longitude}</p>
            <p><span>TIMEZONE:</span> {props.ipData.timezone}</p>
            <p><span>UTC:</span> {props.ipData.utc_offset}</p>
            <p><span>CALL CODE:</span> {props.ipData.country_calling_code}</p>
            <p><span>CURRENCY:</span> {props.ipData.currency}</p>
            <p><span>CURRENCY NAME:</span> {props.ipData.currency_name}</p>
            <p><span>LANGUAGE:</span> {props.ipData.languages}</p>
            <p><span>COUNTRY AREA:</span> {props.ipData.country_area}</p>
            <p><span>COUNTRY POPYLATION:</span> {props.ipData.country_population}</p>
            <p><span>ASN:</span> {props.ipData.asn}</p>
            <p><span>ORG:</span> {props.ipData.org}</p>
            
        </div>
    )
}

export default DataComponent;







