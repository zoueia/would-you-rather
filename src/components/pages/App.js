import '../../sass/App.css';
import ConnectedForm from './Form'; 
import ConnectedUsersBoard from './UsersBoard';
import ConnectUnansweredQ from './UnansweredQ';
import ConnectedAnsweredQ from './AnsweredQ';
import ConnectUserAcc from './UserAcc';
import {BrowserRouter as Router,Redirect, Route,Switch,} from 'react-router-dom'
import React from 'react';
import ConnectedHome from './Home';
import {handleRecieveData} from '../../actions/shared'
import { connect } from 'react-redux';
import ConnectedLogIn from './LogIn'
import ConnectedQ from './Q'
import { visit } from '../../actions/visit'
import {withRouter} from 'react-router-dom'
import ConnectPagesHeader from '../PagesHeader'



class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {}
    } 

  componentDidMount = ()=>{
     const {dispatch} = this.props
      dispatch(handleRecieveData())
     }
 
  current = (page) =>{
    const {dispatch} = this.props
    dispatch(visit(page))
  } 
  
  
  render() {
    const {questions,carrentPage,authen} = this.props
    return (
      <div className='App'>
        <Router>
        <Switch>
        <Route exact path='/home' render={()=>{if(authen){return <ConnectedHome/>}else{{this.current('/home')} return (<Redirect to={'/'}></Redirect>)}}}/>
        <Route exact path='/leaderboard' render={()=>{if(authen){return <ConnectedUsersBoard/>}else{{this.current('/leaderboard')} return (<Redirect to={'/'}></Redirect>)}}}/>
        <Route exact path='/unanswered-q' render={()=>{if(authen){return <ConnectUnansweredQ/>}else{{this.current('/unanswered-q')} return (<Redirect to={'/'}></Redirect>)}}}/>
        <Route exact path='/answered-q' render={()=>{if(authen){return <ConnectedAnsweredQ/>}else{{this.current('/answered-q')} return (<Redirect to={'/'}></Redirect>)}}}/>
        <Route exact path='/user-name' render={()=>{if(authen){return <ConnectUserAcc/>}else{{this.current('/user-name')} return (<Redirect to={'/'}></Redirect>)}}}/>
        
        {questions.map(q => <Route exact path = {`/${q.id}`} key={q.id} render={()=><ConnectedQ key={q.id} question={q}/>}/> )}

        <Route exact path='/form' render={()=>{if(authen){
            switch(carrentPage) {
              case '/leaderboard':
                  return <div><ConnectedUsersBoard/><ConnectedForm/></div>
              case '/unanswered-q':
                  return <div><ConnectUnansweredQ/><ConnectedForm/></div>
              case '/answered-q':
                  return <div><ConnectedAnsweredQ/><ConnectedForm/></div>
              case '/user-name':
                  return <div><ConnectUserAcc/><ConnectedForm/></div>
              case '/home':
                  return <div><ConnectedHome/><ConnectedForm/></div>
              default:
                  return <div><ConnectedHome/><ConnectedForm/></div>
            }
            }else{
              {this.current('/form')} return (<Redirect to={'/'}></Redirect>)
            }
            }
            }/>
            <Route exact path='/' render={()=><ConnectedLogIn/>}/>
            <Route exact path='*' render={()=>{if(authen){return <div><ConnectPagesHeader/><div style={{height: '100%',display:'flex',justifyContent:'center',padding:'200px'}}><span style={{fontSize: '3rem', color: 'gray', padding: '20px'}}>404 error Not Found Page</span><img src={process.env.PUBLIC_URL +'sad 1.svg'} alt="" style={{width:"100px",height:"100px"}}/></div></div>}else{{this.current('/not found')} return (<Redirect to={'/'}></Redirect>)}}}/>
        </Switch>
        </Router>
      </div>
    )
  }
}
export default withRouter(connect((state)=>({
  users : state.users,
  questions : state.questions,
  signedIn : state.signedIn,
  carrentPage: state.currentPage,
  authen: state.authen
}))(App));
