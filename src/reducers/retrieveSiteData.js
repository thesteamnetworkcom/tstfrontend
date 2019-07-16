import * as sd from '../actions/retrieveSiteData'

const initialState={
    siteData:""
}

export default (state=initialState, action) => {
    switch(action.type){
        case sd.SD_SUCCESS:
            return{
                siteData:JSON.parse(action.payload.data)
            }
        default:
            return state
    }
};

export const siteData = (state) => state.siteData
