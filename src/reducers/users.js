import { REC_DATA } from "../actions/shared"
import { ADD_QUESTION } from "../actions/shared"

const users = (state = {}, action) =>{
    switch(action.type) {
        case REC_DATA:
            return action.users
        case ADD_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                  ...state[action.authedUser],
                  questions: state[action.authedUser].questions.concat([action.formattedQuestion.id])
                }
              }    
        default:
            return state
      }
}

export default users



