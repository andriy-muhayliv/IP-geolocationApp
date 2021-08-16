import React, { useContext, useState } from 'react'
import DataComponent from './DataConponent';
import store from './Redux/redux-store';


const Data = () => {

let loader = store.getState().loader;
let data = store.getState().data.data
console.log(data)

return(
    <div>
        { loader ? (<p>loading...</p>) : !data.error && !data.ip ? ( <p>Enter IP and press "Search" to get geolocation data</p>) : data.error || store.getState().value.length > 1 ? (<p>Something went wrong &#128546;. Please try again. </p>) : null}
        {data.asn ? (<DataComponent ipData={data} /> ) : null}


    </div>
)
}

export default Data;
