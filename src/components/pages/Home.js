import React from 'react'
import { connect } from 'react-redux'
import ConnectedHeader from '../Header'
import ConnectedShelves from '../Shelves'
import { visit } from '../../actions/visit'
import { withRouter } from 'react-router-dom'
import {authen} from '../../actions/authen'

class Home extends React.Component{
  componentDidMount = () =>{
    const {dispatch} = this.props
    dispatch(visit('/home'))
    dispatch(authen(true))
  }
  render(){
    return(
      <div className='home'>
         <ConnectedHeader/>
         <ConnectedShelves/>
      </div>
      )
  }
}
export default withRouter(connect((state)=>({
  currentPage: state.currentPage
}))(Home))