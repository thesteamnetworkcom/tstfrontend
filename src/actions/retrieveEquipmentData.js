import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const ED_REQUEST = '@@ed/ED_REQUEST';
export const ED_SUCCESS = '@@ed/ED_SUCCESS';
export const ED_FAILURE = '@@ed/ED_FAILURE';

export const ed = (xID) => ({
    [RSAA]:{
        endpoint: '/db/equipment/',
        method:'POST',
        body:JSON.stringify({xid:xID}),
        headers: withAuth({'Content-Type':'application/json'}),
        types:[
            ED_REQUEST, ED_SUCCESS, ED_FAILURE
        ]
    }
})
