import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function OCard (props){
 const author = () =>{
    let {users} = props
          users = Object.values(users)
    const id = props.question.author
    const author = users.find(user=>user.id===id)
    return author
  }
  const {question} = props
return(
    <button className="card">
      <Link to = {`/${question.id}`}>
      <div className="info">
      <div className="sec1">
        <span id='would-you-rather'>Would You Rather.........?!</span>
        <span id='akagi-hogai'>{author().name}<span> asking ...</span></span>
      </div>
      <div className="sec2">
        <div className="count-q">
          <span>Asked {author().questions.length} Q</span>
          <span>Answered {Object.keys(author().answers).length} Q</span>
        </div>
        <div className="count-a">
          <span id='record'>{question.optionOne.votes.length + question.optionTwo.votes.length}</span>
          <span>Answered this Question</span>
        </div>
      </div>
      <div className="sec3">
          <div><span>a.</span><span id='point-a'>{question.optionOne.text}</span></div>
      </div>
    </div>
    <div className="profile-pic">
      <img src={author().avatarURL} alt="profile-pic" />
    </div>
      </Link>
  </button> 
 )
}
export default connect((state)=>({
  users : state.users
}))(OCard)

