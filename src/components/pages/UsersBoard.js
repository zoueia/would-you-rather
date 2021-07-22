import React from 'react'
import { connect } from 'react-redux'
import ConnectedPagesHeader from '../PagesHeader'
import UserCard from '../UserCard'
import { visit } from '../../actions/visit'
import {withRouter} from 'react-router-dom'

class UsersBoard extends React.Component{
  componentDidMount = () =>{
    const {dispatch} = this.props
    dispatch(visit('/leaderboard'))
  }
  usersBoard = () => {
    let {users} = this.props 
           users = Object.values(users)
    let questions = users.map(user=>user.questions.length+Object.keys(user.answers).length)
    questions.sort().reverse()
    let leftUsers = users
    let sortedUsers = []
    questions.forEach(number=>{
      let theUser = leftUsers.find(user=>user.questions.length + Object.keys(user.answers).length===number)
      sortedUsers.push(theUser)
      leftUsers = leftUsers.filter(user=> user.id !== theUser.id)
    })
    return sortedUsers
  }

  render(){
    return(
      <div className='user-board'>
        <ConnectedPagesHeader page={'UsersBoard'} qNum ={5} item={'Users'}/>
        <section className="user-card">
          {this.usersBoard().map(user=><UserCard key={user.id} user={user}/>)}
        </section>
      </div>
      )
  }
}
export default withRouter(connect((state)=>({
  users: state.users,
  authen: state.authen
}))(UsersBoard))
