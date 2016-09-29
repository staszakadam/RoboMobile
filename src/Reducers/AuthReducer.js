import ActionTypes from '../Actions/ActionTypes';

const initialState = {
    isLogin: false,
    hash: ''
}

export default function AuthReducer(state = initialState, action = {}) {
    switch(action.type){
        case ActionTypes.LOG_IN:
            return Object.assign(
                {},
                state,
                {
                    isLogin: action.data.isLogin,
                    hash: action.data.hash
                }
            )
        default:
            return initialState
        
    }
}