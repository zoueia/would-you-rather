import { _getUsers , _getQuestions } from "../_Data"
import { _saveQuestion } from "../_Data"

export const REC_DATA = 'REC_DATA'
export const ADD_QUESTION ='QUESTION'

export const recieveData = (users,questions) => ({
    type : REC_DATA,
    users,
    questions
})

export const addQuestion = (question,authedUser,formattedQuestion) => ({
  type : ADD_QUESTION,
  question,
  authedUser,
  formattedQuestion
})

export const handleRecieveData = () =>{
    return (dispatch) => {
        return Promise.all([
          _getUsers(),
          _getQuestions()
        ])
        .catch(()=> alert("can't recive data, please refresh"))
        .then((data) => dispatch(recieveData(data[0],data[1]))
        )
      }
}


export const handleAddQuestion = ({ optionOneText, optionTwoText, author}) =>{
  return (dispatch)=>{
      return _saveQuestion({ optionOneText, optionTwoText, author })
      .then((res)=>dispatch(addQuestion([res],author,res)))
  }
}