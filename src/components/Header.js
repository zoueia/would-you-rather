import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { hideShelves } from '../actions/hideShelves';



class Header extends React.Component{

  constructor(props) {
    super(props);
    const {shelves} = this.props
    this.state = {
      Hide_Unanswered  : shelves.Hide_Unanswered,
      Hide_Answered : shelves.Hide_Answered,
      Hide_My : shelves.Hide_My
    }
  }

  show = (e)=>{
    const {dispatch} = this.props
    this.setState((pre)=>(
       pre[e.target.value] = e.target.checked
    ))
    dispatch(hideShelves(this.state))

  }
  
  render(){
    const {signedIn} = this.props
    return(
      <section className="header">
    <div className="profile-pic">
    <button className="edit-profile-pic">
    <img src={process.env.PUBLIC_URL +'pencil.svg'} alt="" />
    </button>
    <button className="the-pic">
      <Link to='/user-name'>
      <img src={signedIn.avatarURL} alt="" className='profile-pic-image' />
      <button className="add-q">
      <Link to='/form'><img src={process.env.PUBLIC_URL +'Group 33.svg'} alt="" /></Link>
      </button>
      </Link>
    </button>
    <button className="user-name"><Link to='/user-name'>{signedIn.name}</Link></button>
    </div>
    <form className='show-questions'>
    <label className='stays-alone'>
      <input type="checkbox" value="Hide_Unanswered" onClick={(e)=> this.show(e)} checked={this.state.Hide_Unanswered}/>
      Hide Unanswered Questions
    </label>  
    <label>
      <input type="checkbox" value="Hide_Answered" onClick={(e)=> this.show(e)} checked={this.state.Hide_Answered}/>
      Hide answered Questions
    </label>  
    <label>
      <input type="checkbox" value="Hide_My" onClick={(e)=> this.show(e)} checked={this.state.Hide_My}/>
      Hide my Questions
    </label>  
    </form>
    <div className='drop-menue-button'>
     <button className="drop-button">Menue</button> 
    <div className="menue" >
      <div className="home"></div>
      <div className="sec1">
        <div><button><Link to='/form'><img src={process.env.PUBLIC_URL +'Group 35.svg'} alt="icon" /></Link></button><Link to='/form'>Ask Question</Link></div>
      </div>
      <div className="sec2">
        <div><button><img src={process.env.PUBLIC_URL +'Group 37.svg'} alt="" /></button><Link to='/leaderboard'>Users boared</Link></div>
        <Link to='/unanswered-q'>unanswered questions</Link>
        <Link to='/answered-q'>answered questions</Link>
        <Link to='/user-name'>my questions</Link>
        <Link to='/' className='log-out'>sign out</Link> 
      </div>
      <div className="sec3">
        <div><Link to='/home'>Home</Link></div>
      </div>
    </div>
    </div>
  </section>
  )
  }
}

export default connect((state)=>({
  signedIn: state.signedIn,
  shelves: state.shelves
}))(Header)