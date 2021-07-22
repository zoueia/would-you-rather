import React from 'react'
import ConnectPagesHeader from '../PagesHeader'
import ConnectedPoll from '../Poll'
import { connect } from 'react-redux'
import { visit } from '../../actions/visit'

class UnansweredQ extends React.Component{
  componentDidMount = () =>{
    const {dispatch} = this.props
    dispatch(visit('/unanswered-q'))
  }
   filterQuestions = () => {
    const {questions , signedIn} = this.props
    let answeredPlusAskedId= Object.keys(signedIn.answers).concat(signedIn.questions)
    let allQ = questions
    let unansweredQ = allQ
    answeredPlusAskedId.forEach(qId => {
      unansweredQ=unansweredQ.filter(q=>q.id!==qId)
    })
    return unansweredQ
  } 
  render(){
    return(
      <div className='unanswered-q'>
        <ConnectPagesHeader page={'Unanswered Qustions'} qNum ={this.filterQuestions().length} item={'question'}/>
        <div className="grid-wrapper">
          {this.filterQuestions().map(q=><ConnectedPoll key={q.id} question={q}/>)}
        </div>                                       
      </div>
      )
  }
}
export default connect((state)=>({
  questions: state.questions,
  signedIn : state.signedIn
}))(UnansweredQ)