export const LOGGED_IN = 'LOGGED_IN'

export const loggedIn = (user) =>{
    return{
        type: LOGGED_IN,
        user
    }
}
