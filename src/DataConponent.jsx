import React from 'react';
import style from './App.module.css'
const DataComponent = (props) => {
    

    return(
        <div className={style.ip__data}>
            <p className='ip__data_p'><span>IP:</span> {props.ipData.ip}</p>
            <p className='ip__data_p'><span>VERSION:</span> {props.ipData.version}</p>
            <p className='ip__data_p'><span>CITY:</span> {props.ipData.city}</p>
            <p className='ip__data_p'><span>REGION:</span> {props.ipData.region}</p>
            <p className='ip__data_p'><span>REGIONT CODE:</span> {props.ipData.region_code}</p>
            <p className='ip__data_p'><span>COUNTRY CODE:</span> {props.ipData.country_code}</p>
            <p className='ip__data_p'><span>ISO:</span> {props.ipData.country_code_iso3}</p>
            <p className='ip__data_p'><span>COUNTRY:</span> {props.ipData.country_name}</p>
            <p className='ip__data_p'><span>COUNTRY CAPITAL:</span> {props.ipData.country_capital}</p>
            <p className='ip__data_p'><span>LTD:</span> {props.ipData.country_tld}</p>
            <p className='ip__data_p'><span>CODE:</span> {props.ipData.continent_code}</p>
            <p className='ip__data_p'><span>IN EU:</span> {props.ipData.in_eu}</p>
            <p className='ip__data_p'><span>POSTAL:</span> {props.ipData.postal}</p>
            <p className='ip__data_p'><span>LATITUDE:</span> {props.ipData.latitude}</p>
            <p className='ip__data_p'><span>LONGITUDE:</span> {props.ipData.longitude}</p>
            <p className='ip__data_p'><span>TIMEZONE:</span> {props.ipData.timezone}</p>
            <p className='ip__data_p'><span>UTC:</span> {props.ipData.utc_offset}</p>
            <p className='ip__data_p'><span>CALL CODE:</span> {props.ipData.country_calling_code}</p>
            <p className='ip__data_p'><span>CURRENCY:</span> {props.ipData.currency}</p>
            <p className='ip__data_p'><span>CURRENCY NAME:</span> {props.ipData.currency_name}</p>
            <p className='ip__data_p'><span>LANGUAGE:</span> {props.ipData.languages}</p>
            <p className='ip__data_p'><span>COUNTRY AREA:</span> {props.ipData.country_area}</p>
            <p className='ip__data_p'><span>COUNTRY POPYLATION:</span> {props.ipData.country_population}</p>
            <p className='ip__data_p'><span>ASN:</span> {props.ipData.asn}</p>
            <p className='ip__data_p'><span>ORG:</span> {props.ipData.org}</p>
            
        </div>
    )
}

export default DataComponent;







