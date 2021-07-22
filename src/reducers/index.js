import {combineReducers} from 'redux'

import users from './users'
import questions from './questions'
import signedIn from './signedIn'
import shelves from './shelves'
import currentPage from './currentPage'
import authen from './authen'

export default combineReducers({
    users,
    questions,
    signedIn,
    shelves,
    currentPage,
    authen 
   })

