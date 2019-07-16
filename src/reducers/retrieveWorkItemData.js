import * as wd from '../actions/retrieveWorkItemData'

const initialState={
    workItemData:""
}

export default (state=initialState, action) => {
    switch(action.type){
        case wd.WD_SUCCESS:
            return{
                workItemData:JSON.parse(action.payload.data)
            }
        default:
            return state
    }
}

export const workItemData = (state) => state.workItemData
