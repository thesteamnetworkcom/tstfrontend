import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

export const DD_REQUEST = '@@dd/DD_REQUEST';
export const DD_SUCCESS = '@@dd/DD_SUCCESS';
export const DD_FAILURE = '@@dd/DD_FAILURE';

export const dd = (xID) => ({
    [RSAA]:{
        endpoint: '/db/details/',
        method:'POST',
        body:JSON.stringify({xid:xID}),
        headers: withAuth({'Content-Type':'application/json'}),
        types:[
            DD_REQUEST, DD_SUCCESS, DD_FAILURE
        ]
    }
})
