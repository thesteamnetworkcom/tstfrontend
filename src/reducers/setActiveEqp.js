import { SETACTIVEEQP } from '../actions/setActiveEqp'

const initialState = {
    activeEqp:null
}

export default function(state=initialState, action){
    console.log(action)
    switch(action.type){
        case SETACTIVEEQP:
            console.log("HERE");
            return{
                activeEqp: action.payload.data
            }
        default:
            return state
    }
};

export const setActiveEqpReplacer = (type, payload) => {
    return{
        type:type,
        payload:payload
    }
}
export const setActiveEqp = (state) => state.activeEqp
