import * as dd from '../actions/retrieveDetailData'

const initialState={
    detailData:""
}

export default (state=initialState, action) => {
    switch(action.type){
        case dd.DD_SUCCESS:
            return{
                detailData:JSON.parse(action.payload.data)
            }
        default:
            return state
    }
};

export const detailData = (state) => state.detailData
