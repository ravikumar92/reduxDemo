
const initialState = {
    age:21
};

function reducers(state = initialState, action) {
    const newState = {...state};
    if(action.type == 'AGE_UP') {
        newState.age++;
    }
    if(action.type == 'AGE_DOWN') {
        newState.age--;
    }
    return newState;
}

export default reducers;