import React from 'react'
import { connect } from 'react-redux'
import ConnectedPagesHeader from '../PagesHeader'
import ConnectedPoll from '../Poll'
import { visit } from '../../actions/visit'
import {withRouter} from 'react-router-dom'


class AnsweredQ extends React.Component{
  componentDidMount = () =>{
    const {dispatch} = this.props
    dispatch(visit('/answered-q'))
  }
  
  filterQuestions = () => {
    const {questions,signedIn} = this.props
    let allQ = questions
    const answered = Object.keys(signedIn.answers)
    let answeredQ = []
    answered.forEach(qId => {
      answeredQ = answeredQ.concat(allQ.find(q=>q.id===qId))
    })
    return answeredQ.reverse()
  } 
  render(){
  return(
    <div className='user-board'>
        <ConnectedPagesHeader page={'Answered Qustions'} qNum ={this.filterQuestions().length} item={'question'}/>
        <div className="grid-wrapper">
          {this.filterQuestions().map(q=><ConnectedPoll key={q.id} question={q}/>)}
        </div>                                       
    </div>
    
    )
  }
}
export default withRouter(connect((state)=>({
  questions: state.questions,
  signedIn: state.signedIn
}))(AnsweredQ))
