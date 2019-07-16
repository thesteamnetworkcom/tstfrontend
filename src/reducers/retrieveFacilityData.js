import * as fd from '../actions/retrieveFacilityData'

const initialState={
    faciiltyData:""
}

export default (state=initialState, action) => {
    switch(action.type){
        case fd.FD_SUCCESS:
            return{
                facilityData:JSON.parse(action.payload.data)
            }
        default:
            return state
    }
};

export const facilityData = (state) => state.facilityData
