import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const SD_REQUEST = '@@sd/SD_REQUEST';
export const SD_SUCCESS = '@@sd/SD_SUCCESS';
export const SD_FAILURE = '@@sd/SD_FAILURE';

export const sd = () => ({
    [RSAA]:{
        endpoint:'/db/all/',
        method:'GET',
        headers:withAuth({'Content-Type':'application/json'}),
        types:[
            SD_REQUEST, SD_SUCCESS, SD_FAILURE
        ]
    }
})
