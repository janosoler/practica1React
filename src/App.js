import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username : 'Tortuguita'
  }
  render () {
    return (
      <div className="App">
        <UserInput/>
        <UserOutput username={this.state.username}/>
        <UserOutput/>
        <UserOutput/>
      </div>
    );
  }
}

export default App;
