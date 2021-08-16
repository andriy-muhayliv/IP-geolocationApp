import React, {useState} from 'react';
import style from './App.module.css'
import { dataAction } from './Redux/dataReducer';
import { actionValue } from './Redux/inputValue-reducer';
import { loaderAction } from './Redux/loaderReducer';
import store from './Redux/redux-store'

const Input =() => {
    let [value, setValue] = useState(store.getState().value.value)

    const changeValue = (e) => {
        let value = e.target.value;
          store.dispatch(actionValue(value));
        setValue(store.getState().value.value);
        if (value.length == 0) {store.dispatch(dataAction(''))}
    }


    const searchIP = () => {
        let ipData = value;
        
       if (value.length > 0) {
        fetch(`https://ipapi.co/${ipData}/json/`)
        .then(response => {
    response.json().then(jsonData => {
      store.dispatch(loaderAction(true))
      store.dispatch(dataAction(jsonData))
      store.dispatch(loaderAction(false))
    });
  })
  .catch(function(error) {
    console.log(error)
  });
       }
    }

    
  

    return(
        <div  >
            <input className={style.input} placeholder='8.8.8.8' onChange={changeValue} value={value} /> 
            <button onClick={searchIP} >Search</button>
        </div>
    )
}

export default Input;