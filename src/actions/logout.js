export const LOGOUT_REQUEST = '@@lo/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = '@@lo/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = '@@lo/LOGOUT_FAILURE';

export function logout(){
    localStorage.removeItem('auth')
    return LOGOUT_SUCCESS;
}
