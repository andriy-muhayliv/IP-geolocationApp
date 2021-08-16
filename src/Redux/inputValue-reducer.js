import { dataAction } from "./dataReducer";
import store from "./redux-store";

const VALUE = 'VALUE';

let storeState = {
    value: '',
}

const valueReducer = (state = storeState, action) => {
    switch(action.type) {
            case VALUE:
            state.value = action.newValue;
            return state;

        default: return state;
    }
}

export const actionValue = (value) => ({type: VALUE, newValue: value})

export default valueReducer;