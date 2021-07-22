import { VISIT } from "../actions/visit"

const currentPage = (state = '/home', action) =>{
    switch(action.type) {
        case VISIT:
            return action.page
        default:
            return state
      }
}

export default currentPage