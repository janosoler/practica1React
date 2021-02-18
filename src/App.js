import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username : 'Tortuguita'
  }

  cambiaUsername =  (event) => {
    this.setState({
      username: event.target.value
    })
  }
  render () {
    return (
      <div className="App">
        <UserInput changed={this.cambiaUsername} username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput/>
        <UserOutput/>
      </div>
    );
  }
}

export default App;
