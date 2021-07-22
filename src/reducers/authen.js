import { AUTHEN } from "../actions/authen"

const authen = (state = false, action) =>{
    switch(action.type) {
        case AUTHEN:
            return action.authen
        default:
            return state
      }
}

export default authen