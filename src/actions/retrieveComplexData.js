import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const CD_REQUEST = '@@cd/CD_REQUEST';
export const CD_SUCCESS = '@@cd/CD_SUCCESS';
export const CD_FAILURE = '@@cd/CD_FAILURE';

export const cd = (xID) => ({
    [RSAA]:{
        endpoint: '/db/complexes/',
        method: 'POST',
        body: JSON.stringify({xid:xID}),
        headers: withAuth({'Content-Type':'application/json'}),
        types:[
            CD_REQUEST, CD_SUCCESS, CD_FAILURE
        ]
    }
})
