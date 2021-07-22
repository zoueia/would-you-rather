import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {handleAddQuestion} from '../../actions/shared';
class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      optionA :'',
      optionB :'',
      longA : false,
      longB : false,
      requiredA : false,
      requiredB : false,
      alarmA : false,
      alarmB : false,
      success : false
    }
  }

  getOptionA = (event) =>{
    const value = event.target.value
    if(value){
      this.setState((pre)=>(pre.requiredA = false))
    }
    if(value.split(' ').length<=100){
        this.setState({
          optionA : value,
          longA: false,
          });
    }
    else{
        this.setState({longA: true})
    } 
  }

  getOptionB = (event) =>{
  const value = event.target.value
  if(value){
    this.setState({requiredB : false})
  }
  if(value.split(' ').length<=100){
      this.setState({
        optionB : value,
        longB: false,
        });
  }
  else{
      this.setState({longB: true})
  } 
 }

  getNewQ = () => {
    const {signedIn,dispatch} = this.props
  if(this.state.optionA && this.state.optionB){
        const optionOneText = this.state.optionA 
        const optionTwoText = this.state.optionB
        const user = signedIn
        const author = user.id
        dispatch(handleAddQuestion({ optionOneText, optionTwoText, author}))
        this.setState({
          optionA :'',
          optionB :'',
          })
    }
    else if(!this.state.optionA){
        this.setState({requiredA : true})
    }
    else{
        this.setState({requiredB : true})
    }
  }



  render(){
    const {currentPage} = this.props
    return(
      <div className="page">
       <div className="ask-form">
          <div className="title"><span>Ask Question ..</span><button className="exit" ><Link to={currentPage}><img src="images/Group 44.svg" alt="" /></Link></button></div>
          <div className="main">
            <span id="would-you-rather">Would you rather .....?</span>
            <div className="option">
              <span>Add option ‘a’</span>
              <div>
              <textarea placeholder='a. 100 word only available for you' spellCheck='true' value={this.state.optionA} onChange={(e)=> this.getOptionA(e)}></textarea>
              </div>
              { this.state.longA 
                    ? <span className='alarm'>this is more than '100' word</span>
                    : null
                }
                { this.state.requiredA 
                    ? <span className='alarm'>Requiered field</span>
                    : null
                }
          </div>
          <div className="option">
              <span>Add option ‘b’</span>
              <div>
              <textarea placeholder='b. 100 word only available for you' spellCheck='true' value={this.state.optionB} onChange={(e)=> this.getOptionB(e)}></textarea>
              </div>
              { this.state.longB 
                    ? <span className='alarm'>this is more than '100' word</span>
                    : null
                }
                { this.state.requiredB
                    ? <span className='alarm'>Requiered field</span>
                    : null
                }
            </div>
            <button className="btn btn-primary" type="submit" onClick={()=> this.getNewQ()}>
                <Link to={this.state.optionA&&this.state.optionB? './home': './form'}>submit</Link> 
            </button>
        </div>
        </div>
      </div>
      )
  }
}
export default connect((state)=>({
  signedIn: state.signedIn,
  currentPage: state.currentPage
}))(Form)