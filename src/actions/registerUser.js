import { RSAA } from 'redux-api-middleware';

export const RU_REQUEST = '@@ru/RU_REQUEST';
export const RU_SUCCESS = '@@ru/RU_SUCCESS';
export const RU_FAILURE = '@@ru/RU_FAILURE';

export const ru = (username, password) => ({
    [RSAA]:{
        endpoint: '/unauth/registeruser/',
        method:'POST',
        body:JSON.stringify({password: password, username: username}),
        headers:({ 'Content-Type': 'application/json' }),
        types:[
            RU_REQUEST, RU_SUCCESS, RU_FAILURE
        ]
    }
})
