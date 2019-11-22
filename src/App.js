import React, { Component } from 'react';
import './App.css';
import StoredNumber from './components/StoredNumber.js';


class App extends Component {

  state = {
    numbers: [],
    potentialNumber: ''
  }

  recordNumber = (event) => {
    console.log(`recording the number!`);
    this.setState({
      potentialNumber: event.target.value
    })
  }

  storeNumber = () => {
    this.setState({
      numbers: [...this.state.numbers, this.state.potentialNumber],
      potentialNumber: ''
    })
  }

  render() {
    return (
      <div className="App">
        <div className="input">
          <input value={this.state.potentialNumber} type="number" onChange={this.recordNumber}></input>
          <button onClick={this.storeNumber}>Save</button>
        </div>
        <div className="record">
          <div className="record_title">My Stored Numbers</div>
          {/* this loop outputs all the numbers */}
          {
            this.state.numbers.map(
              (number) => {
                return <StoredNumber number={number} />
              }
            )
          }
        </div>

      </div>
    );
  }
}

export default App;
