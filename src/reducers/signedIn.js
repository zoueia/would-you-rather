import { LOGGED_IN } from "../actions/loggedIn"

const signedIn = (state = {}, action) => {
    switch(action.type) {
        case LOGGED_IN:
            return action.user
        default:
            return state
      }
}

export default signedIn

