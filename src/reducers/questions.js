import { ANSWER_Q } from "../actions/question"
import { ADD_QUESTION } from "../actions/shared"

import { REC_DATA } from "../actions/shared"   
const questions = (state = [], action) =>{
    switch(action.type) {
        case ADD_QUESTION:
            return action.question.concat(state)
        case ANSWER_Q:
            return state
        case REC_DATA:
            return Object.values(action.questions).reverse()
        default:
            return state
      }
}

export default questions

