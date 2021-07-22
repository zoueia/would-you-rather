import React from 'react'
import {Link} from 'react-router-dom'
import {loggedIn} from '../../actions/loggedIn'
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import {authen} from '../../actions/authen'

class LogIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          user : {},
          go : false
        }
      }

    componentDidMount = () =>{
        this.setState({
            user : {}
        })

    } 

    choose = (user) =>{ 
        this.setState({
            user : user
        })
    }

    LogIn = ()=>{
        const {dispatch} = this.props
        if(this.state.user.id){
            dispatch(loggedIn(this.state.user))
            dispatch(authen(true))
            this.setState((pre)=>pre.go=true)
        }
      }

    render(){
        let {users} =  this.props
        const {currentPage} = this.props
              users = Object.values(users)
        return(
            <section className='log-in-page'>
                <div className='log-in'>
                    <div className='sec1'>
                        <span>Choose user to began with</span>
                        <div className="droplist">
                            <div className="select">
                                <img src="images\vector1.svg" alt="" />
                                <ul>
                                    {users[0]?null:<div className='myDIV'>
                                        <div id='myDIV'>
                                        <div id='inside'></div>
                                        </div>
                                        </div>}
                                    {users.map(
                                    user=>(<li key={user.id}><button id={user.id} onClick={()=>this.choose(user)}>{user.name}</button></li>)
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='sec2'>
                        {this.state.user.id ? <div><img src={this.state.user.avatarURL} alt=""/></div> : null}
                        <span>{this.state.user.name}</span>
                    </div>
                    <div className='sec3'>
                        <button  id={'login'} onClick={()=>this.LogIn()}>
                            {this.state.user.id ? <Link to={currentPage}>sign in</Link> : <Link to={'/'}>sign in</Link>}
                        </button>
                    </div>
                </div>
            </section>
          )
    }
}
   
export default withRouter(connect((state)=>({
    users: state.users,
    currentPage: state.currentPage,
    authen: state.authen
}))(LogIn))
