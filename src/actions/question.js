import { _saveQuestionAnswer } from "../_Data"

export const ANSWER_Q = 'ANSWER_Q'

export const answerQ = (question) =>{
    return{
        type: ANSWER_Q,
        question,
    }
}

export const handleAnswer = ({authedUser, qid, answer}) =>{
    return (dispatch)=>{
        return _saveQuestionAnswer({authedUser, qid, answer})
        .then((res)=>dispatch(answerQ(res)))
    }
}