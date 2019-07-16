import * as ed from '../actions/retrieveEquipmentData'

const initialState={
    equipmentData:""
}

export default (state=initialState, action) => {
    switch(action.type){
        case ed.ED_SUCCESS:
            return{
                equipmentData:JSON.parse(action.payload.data)
            }
        default:
            return state
    }
};

export const equipmentData = (state) => state.equipmentData
