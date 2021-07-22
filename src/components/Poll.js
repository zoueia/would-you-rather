import React from 'react'
import {handleAnswer} from '../actions/question';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class Poll extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showVotes : false,
      choice : ''
    }
  }
  
  componentDidMount = () =>{
    this.savedChoice()
  }

  savedChoice = () =>{
    const {signedIn,question} = this.props
    const authedUser = signedIn
    if(Object.keys(authedUser.answers).find(qID=>qID===question.id)){
      const answer = authedUser.answers[question.id]
      this.setState({
        choice : answer,
        showVotes : true,
      })
    }
  }

  choose = (e) =>{
    this.setState({
      choice : e.target.value,
      showVotes : true
    })
  }

  votes = () =>{
    const {question} = this.props
    let optionOne = question.optionOne.votes.length
    let optionTwo = question.optionTwo.votes.length
    let percentageOne
    let percentageTwo
    if (this.state.choice==='optionOne'){
      optionOne ++
      percentageOne = ((optionOne/(optionOne+optionTwo))*100).toFixed(2)
      percentageTwo = ((optionTwo/(optionOne+optionTwo))*100).toFixed(2)
    }
    else{
      optionTwo ++
      percentageTwo = ((optionTwo/(optionOne+optionTwo))*100).toFixed(2)
      percentageOne = ((optionOne/(optionOne+optionTwo))*100).toFixed(2)
    }
    return({optionOne,optionTwo,percentageOne,percentageTwo})
  }

  formate = () =>{
    const {signedIn,question} = this.props
    const answer = this.state.choice
    let modiQ = question
    let user = signedIn
    user.answers[modiQ.id] = answer
    modiQ.optionOne.votes = modiQ.optionOne.votes.filter(uid=>uid!==user.id)
    modiQ.optionTwo.votes = modiQ.optionTwo.votes.filter(uid=>uid!==user.id)
    question[answer].votes = modiQ[answer].votes.concat(user.id)
    return {user,modiQ}
  }

  done = () =>{
    const {dispatch} = this.props
    const {user,modiQ} = this.formate()
    const question = modiQ
    const qid = modiQ.id
    const authedUser = user.id
    const answer = this.state.choice
    console.group('kollo')
    console.log(user)
    console.log(question)
    console.log(qid)
    console.log(authedUser)
    console.log(answer)
    console.groupEnd()
    dispatch(handleAnswer({authedUser, qid, answer, question , user}))
  }

  author = () =>{
    let {question , users} = this.props
           users = Object.values(users)
    const id = question.author
    const author = users.find(user=>user.id===id)
    return author
  }
  render(){
    const {question} = this.props
    const author = this.author()
    const votes = this.votes()
    return(
      <section to={`question/:${question.id}`} className="feed">

      <div className="poll">

        <div className="sec1">
          <span id="would-you-rather">Would You Rather.........?!</span>
        </div>
        <div className="sec2">

          <div className='wrap'>
            <span>a.</span>
            <div className="options">
            <input type="radio" name={question.id} value={'optionOne'} onClick={(e)=>this.choose(e)} checked={this.state.choice==='optionOne'?'checked':''}/>
            <label className="option">
              {question.optionOne.text}
              { this.state.showVotes 
                ?  <div className="vote-results">
                    <span>a: {votes.optionOne} votes</span><span className='percentage'>{votes.percentageOne}%</span>
                    <div className="showVotes"><div className="color-per" style={{width:`${votes.percentageOne}%` ,backgroundImage: `url('images/Rectangle 85 (1).png')`}}></div></div>
                  </div>
                : null
              }
            </label>
            </div>
          </div>

          <div className='wrap'>
            <span>b.</span>
            <div className="options">
            <input type="radio" name={question.id} value={'optionTwo'} onClick={(e)=>this.choose(e)} checked={this.state.choice==='optionTwo'?'checked':''}/>
            <label className="option">
              {question.optionTwo.text}
              { this.state.showVotes 
                ?  <div className="vote-results">
                    <span>b: {votes.optionTwo} votes</span><span className='percentage'>{votes.percentageTwo}%</span>
                    <div className="showVotes"><div className="color-per" style={{width:`${votes.percentageTwo}%`,backgroundImage: `url('images/Rectangle 85 (1).png')` }}></div></div>
                  </div>
                : null
              }
            </label>
            </div>
          </div>

        </div>
      </div>
      <Link to={`/${question.id}`}>
      <div className="profile">
        <div className='image'><img src={author.avatarURL} alt="" /><span className='use-name'>{author.name}</span></div>
        <div className='info'>
            <div className='user-q'>
              <div><span>Asked:</span><span className="number">{author.questions.length} Q</span></div>
              <div><span>Answered:</span><span className="number">{Object.keys(author.answers).length} Q</span></div>
              <div><span>You voted</span><span className="number">B</span></div>
            </div>
        </div>
      </div>
        </Link>
      <div className="all-votes">
          <span className='score'>{question.optionOne.votes.length + question.optionTwo.votes.length}users<span>Answered this Questions.</span></span>
          <button className="btn btn-primary" onClick={()=>this.done()}>Done</button>
      </div>
    </section>
    )
  }
  }

export default connect((state)=>({
  users: state.users,
  signedIn: state.signedIn
}))(Poll)

