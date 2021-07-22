import { HIDE_SHLEF } from "../actions/hideShelves"

const shelves = (state = {}, action) =>{
    switch(action.type) {
        case HIDE_SHLEF:
            return action.shelves
        default:
            return state
      }
}

export default shelves