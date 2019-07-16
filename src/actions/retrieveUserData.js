import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const UD_REQUEST = '@@ud/UD_REQUEST';
export const UD_SUCCESS = '@@ud/UD_SUCCESS';
export const UD_FAILURE = '@@ud/UD_FAILURE';

export const ud = () => ({
    [RSAA]:{
        endpoint: '/api/userdata/',
        method:'GET',
        headers:withAuth({ 'Content-Type': 'application/json' }),
        types:[
            UD_REQUEST, UD_SUCCESS, UD_FAILURE
        ]
    }
})
