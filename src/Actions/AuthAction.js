import ActionTypes from './ActionTypes';

export function LogIn(isLogin, hash){
    return {
        type: ActionTypes.LOG_IN,
        data: {
            isLogin: isLogin,
            hash: hash
        }
    }
}

export function LogOut()
{
    return {
        type: ActionTypes.LOG_OUT
    }
}

