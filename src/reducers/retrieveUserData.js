import * as ud from '../actions/retrieveUserData'

const initialState={
    userData:""
}

export default (state=initialState, action) => {
    console.log(action.type);
    switch(action.type){
        case ud.UD_SUCCESS:
            return{
                userData:action.payload.message
            }
        default:
            return state
    }
};

export const userData = (state) => state.userData
