export const ADDED_Q = 'ADDED_Q'

export const addQToUser = (authedUser,formattedQuestion) =>{
    return {
        type: ADDED_Q,
        authedUser,
        formattedQuestion
    }

}