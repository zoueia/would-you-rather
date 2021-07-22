import React from 'react'
import { connect } from 'react-redux'
import { visit } from '../../actions/visit'
import ConnectedPoll from '../Poll'
import ConnectedPagesHeader from '../PagesHeader'

class Q extends React.Component{
  componentDidMount = () =>{
    const {dispatch,question} = this.props
    dispatch(visit(`/${question.id}`))
  }
  render(){
      const {question} = this.props
    return(
        <div className='user-board'>
            <ConnectedPagesHeader page={`Answer`} qNum ={'1'} item={'Q'}/>
            <div className="grid-wrapper">
                <div className="grid-wrapper"><ConnectedPoll key={question.id} question={question}/></div>
            </div>                                       
        </div>
      )
  }
}
export default connect((state)=>({
  currentPage: state.currentPage
}))(Q)