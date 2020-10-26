import React, { Component } from 'react';
import './App.css';
import UserList from './UserList.js'
import Button from './Button.js'
import data from './data.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
        data: data,
        userNumber: 0

    }
    // this.increase = this.increase.bind(this)

}

increase = () => {
  this.setState({
      userNumber: this.state.userNumber + 1
  })

}
decrease = () => {
  this.setState({
      userNumber: this.state.userNumber - 1
  })

}

  render () {  
  return (
    <div className="myApp">
      
    <UserList page={this.state.userNumber} data={this.state.data}/>
    <Button handleIncrease={this.increase} handleDecrease={this.decrease}/>
    </div>
  );}
}

export default App;
