import React from 'react'
function UserCard (props){
  const {user} = props
return(
  <div className="card">
    <div className="profile-pic">
     <img src={user.avatarURL} alt=""/>
    </div>
    <span className="user-name">{user.name}</span>
    <div className="count">
      <div className="asked-q"><span>Asked Questions:</span><span>{user.questions.length}</span></div>
      <div className="answered-q"><span>Answered Questions:</span><span>{Object.keys(user.answers).length}</span></div>
      <div className="rate"><span>{user.questions.length + Object.keys(user.answers).length}</span></div>
    </div>
  </div>
  )
}
export default UserCard

