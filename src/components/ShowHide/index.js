import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
    state = {isShowed:false}
    let className
    firstName=()=>{
        this.setState(prevState={
            className={isShowed?"boxContainer":"boxContainer-2"}
        })
    }
    secondName=()=>{
         this.setState(prevState={
            className2={isShowed?"boxContainer":"boxContainer-2"}
        })
    }
  render() {
      const {isShowed}=this.state
    return (
      <div className="background">
        <h1 className="heading">Show/Hide</h1>
        <div className="row">
          <div className="column">
            <button type="button" className="btn" onClick={this.firstName()}>
              Show/Hide Firstname
            </button>
            <div className={className}>
              <h1 className="name">Joe</h1>
            </div>
          </div>
          <div className="column">
            <button type="button" className="btn"  onClick={this.secondName()}>
              Show/Hide Lastname
            </button>
            <div className={className2}>
              <h1 className="name">Jonas</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
