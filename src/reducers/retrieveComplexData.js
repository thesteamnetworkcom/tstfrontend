import * as cd from '../actions/retrieveComplexData'

const initialState={
    complexData:""
}

export default (state=initialState, action) => {
    console.log(action)
    switch(action.type){
        case cd.CD_SUCCESS:
            return{
                complexData:JSON.parse(action.payload.data)
            }
        default:
            return state
    }
};

export const complexData = (state) => state.complexData
