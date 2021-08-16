const DATA = 'DATA'; 

let store = {
    data: [],
};

const dataReducer = (state = store, action) => {
    switch(action.type) {
        case DATA: 
            state.data = '';
            state.data = action.location;
            return state;
        default: return state;
    }
}

export const dataAction = (data) => ({type: DATA, location: data});

export default dataReducer;