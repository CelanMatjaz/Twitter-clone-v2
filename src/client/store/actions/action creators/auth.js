export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const LOGIN_CHECK = 'LOGIN_CHECK';
export const LOGIN_CHECK_SUCCESS = 'LOGIN_CHECK_SUCCESS';
export const LOGIN_CHECK_FAILED = 'LOGIN_CHECK_FAILED';

export const login = () => ({
    type: LOGIN
});

export const loginSuccess = (userInfo, token) => ({
    type: LOGIN_SUCCESS,
    userInfo,
    token
});

export const loginFailed = errors => ({
    type: LOGIN_FAILED,
    errors
}); 

export const logout = () => ({
    type: LOGOUT
}); 

export const loginCheck = () => ({
    type: LOGIN_CHECK
}); 

export const loginCheckSuccess = userInfo => ({
    type: LOGIN_CHECK_SUCCESS,
    userInfo
}); 

export const loginCheckFailed = () => ({
    type: LOGIN_CHECK_FAILED
});



const types = {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
    LOGIN_CHECK,
    LOGIN_CHECK_SUCCESS,
    LOGIN_CHECK_FAILED
}

export default types;