import * as ru from '../actions/registerUser'

const initialState = {
    message:"",
    response:{}
}

export function response(state){
    return state
}

export default (state=initialState, action) => {
    switch(action.type){
        case ru.RU_SUCCESS:
            return{
                message:"SUCCESS",
                response:{
                    'text':'USER CREATED, PLEASE LOGIN'
                }
            }
        case ru.RU_FAILURE:
            return{
                message:"FAILURE",
                errors:{
                    'text':'USER NOT CREATED'
                }
            }
        default:
            return{
                message:"",
                errors:{}
            }
    }
};

export const registerUser = (state) => state.message
