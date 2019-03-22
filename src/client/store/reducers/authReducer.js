import types from '../actions/action creators/auth';

const initState = {
    isEmpty: true,
	userInfo: {},
	loginErrors: [],
	loginCheck: true
}

const authReducer = (state = initState, action) => {
	switch(action.type){
		case types.LOGIN:
			return {
				...state,
				loginErrors: []
			}
		
		case types.LOGIN_SUCCESS:
			localStorage.setItem('token', action.token);
			return {
				...state,
				userInfo: action.userInfo,
				loginErrors: [],
				isEmpty: false
			}

		case types.LOGIN_FAILED:
			return {
				...state,
				userInfo: {},
				loginErrors: action.errors
			}

		case types.LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				userInfo: {},
				isEmpty: true
			}

		case types.LOGIN_CHECK:
			return {
				...state,
				loginCheck: true,
				isEmpty: true
			}

		case types.LOGIN_CHECK_SUCCESS: 
			return {
				...state,
				loginCheck: false,
				userInfo: action.userInfo,
				isEmpty: false
			}

		case types.LOGIN_CHECK_FAILED:
			return {
				...state,
				loginCheck: false,
				isEmpty: true
			}

		default: 
			return state;
	}
}

export default authReducer;