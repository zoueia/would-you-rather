import React from 'react'
import ConnectedOCard from './OCard'
import { connect } from 'react-redux'

function Shelves (props){
  const {questions,signedIn} = props
  const filterQuestions = () => {
    let answeredPlusAskedId= Object.keys(signedIn.answers).concat(signedIn.questions)
    let allQ = questions
    let unansweredQ = allQ
    answeredPlusAskedId.forEach(qId => {
      unansweredQ=unansweredQ.filter(q=>q.id!==qId)
    })
    const answered = Object.keys(signedIn.answers)
    let answeredQ = []
    answered.forEach(qId => {
      answeredQ = answeredQ.concat(allQ.find(q=>q.id===qId))
    })
    const asked = signedIn.questions
    let askedQ = []
    asked.forEach(qId => {
      askedQ = askedQ.concat(allQ.find(q=>q.id===qId))
    })
    return {unansweredQ,answeredQ,askedQ}
  } 
  
  const {shelves} = props
return(
    <section className="shelves">
       {!shelves.Hide_Unanswered?
        <section className="shelved-questions">
        <span className='title'>Unanswered Questions / {filterQuestions().unansweredQ.length} questions</span>
        <div className="cards-container">
          {filterQuestions().unansweredQ.map(q=><ConnectedOCard key={q.id} question={q}/>)}
        </div>
      </section>:null}  
      
      {!shelves.Hide_Answered?
      <section className="shelved-questions">
      <span className='title'>Answered Questions / {filterQuestions().answeredQ.length} questions</span>
      <div className="cards-container">
        {filterQuestions().answeredQ.reverse().map(q=><ConnectedOCard key={q.id} question={q}/>)}
      </div>
    </section> :null} 
      
      {!shelves.Hide_My?
      <section className="shelved-questions">
        <span className='title'>Asked Questions / {filterQuestions().askedQ.length} questions</span>
        <div className="cards-container">
          {filterQuestions().askedQ.map(q=><ConnectedOCard key={q.id} question={q}/>)}
        </div>
      </section> :null}
      

    </section>
  )
}
export default connect((state)=>({
  questions: state.questions,
  signedIn: state.signedIn,
  shelves : state.shelves
}))(Shelves)

  
 
 
