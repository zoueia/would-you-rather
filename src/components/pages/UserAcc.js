import React from 'react'
import { connect } from 'react-redux'
import ConnectedPagesHeader from '../PagesHeader'
import ConnectedPoll from '../Poll'
import { visit } from '../../actions/visit'

class UserAcc extends React.Component{
  componentDidMount = () =>{
    const {dispatch} = this.props
    dispatch(visit('/user-name'))
  }
  filterQuestions = () => {
    const {questions,signedIn} = this.props
    let allQ = questions
    const asked = signedIn.questions
    let askedQ = []
    asked.forEach(qId => {
      askedQ = askedQ.concat(allQ.find(q=>q.id===qId))
    })
    return askedQ
  } 

  render(){
    return(
      <div>
        <ConnectedPagesHeader page={'Your asked Qustions'} qNum ={this.filterQuestions().length} item={'question'}/>
        <div className="grid-wrapper">
          {this.filterQuestions().map(q=><ConnectedPoll key={q.id} question={q}/>)}
        </div>
      </div>
      )
  }
}
export default connect((state)=>({
  questions : state.questions,
  signedIn : state.signedIn
}))(UserAcc)