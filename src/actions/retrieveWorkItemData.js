import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const WD_REQUEST = '@@wd/WD_REQUEST';
export const WD_SUCCESS = '@@wd/WD_SUCCESS';
export const WD_FAILURE = '@@wd/WD_FAILURE';

export const wd = (xID) => ({
    [RSAA]:{
        endpoint: '/db/workitems/',
        method: 'POST',
        body: JSON.stringify({xid:xID}),
        headers: withAuth({'Content-Type':'application/json'}),
        types:[
            WD_REQUEST, WD_SUCCESS, WD_FAILURE
        ]
    }
})
