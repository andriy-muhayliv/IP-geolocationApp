const LOADER = 'LOADER';

let loader = false;

const loaderReducer = (state = loader, action) => {
    switch(action.type) {
        case LOADER: 
            state = action.boolean;
            return state;
        default: return state;
    }
}

export const loaderAction = (bool) => ({type: LOADER, boolean: bool})

export default loaderReducer;