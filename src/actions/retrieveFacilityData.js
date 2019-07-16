import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const FD_REQUEST = '@@fd/FD_REQUEST';
export const FD_SUCCESS = '@@fd/FD_SUCCESS';
export const FD_FAILURE = '@@fd/FD_FAILURE';

export const fd = (xID) => ({
    [RSAA]:{
        endpoint: '/db/facilities/',
        method: 'POST',
        body: JSON.stringify({xid:xID}),
        headers: withAuth({'Content-Type':'application/json'}),
        types:[
            FD_REQUEST, FD_SUCCESS, FD_FAILURE
        ]
    }
})
