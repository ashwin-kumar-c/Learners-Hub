const adminInitialState = {
    isLoading: false,
    data: {},
    errors: {}
}

const adminReducer = (state = adminInitialState, action) => {
    switch(action.type) {
        case 'REGISTER_ERROR' : {
            return {...state, errors: {...state.errors, register: action.payload}}
        }
        case 'LOGIN_ERROR' : {
            return {...state, errors: {...state.errors, login: action.payload}}
        }
        default: {
            return {...state}
        }
    }
}

export default adminReducer