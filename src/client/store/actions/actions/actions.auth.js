import {
    login,
    loginSuccess,
    loginFailed,
    logout,
    loginCheck,
    loginCheckSuccess,
    loginCheckFailed
} from '../action creators/auth';

export const Login = creds => {
    return dispatch => {
        dispatch(login());
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(creds),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.status === 'Login_success'){
                    dispatch(loginSuccess(data.userInfo, data.token));
                }
                else{
                    dispatch(loginFailed(data.errors || []));
                }
            })
            .catch(err => {
                console.error(err);
                dispatch(loginFailed(['Error loggin in user']));
            });
    }
}

export const LoginCheck = () => {
    return dispatch => {
        dispatch(loginCheck());
        const token = 'Bearer ' + localStorage.getItem('token');
        fetch('/login-check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.userInfo){
                    dispatch(loginCheckSuccess(data.userInfo));
                }
                else{
                    dispatch(loginCheckFailed());
                }     
            })
            .catch(() => dispatch(loginCheckFailed()));     
    }
}

export const Logout = () => dispatch => dispatch(logout());
