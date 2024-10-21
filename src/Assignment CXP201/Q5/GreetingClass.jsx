import React, { Component } from 'react';
import Greeting from './Greeting';

class GreetingClass extends Component {
  constructor(props) {
    super(props);
    // Initial state with a default greeting message
    this.state = {
      message: 'Hello, Welcome!'
    };
  }

  // Function to update the message upon clicking the text
  changeMessage = () => {
    this.setState({
      message: this.state.message === 'Hello, Welcome!' 
                ? 'Goodbye, See you later!' 
                : 'Hello, Welcome!'
    });
  };

  render() {
    return (
      <div>
        {/* Display the current message and toggle it on click */}
        <Greeting  message={this.state.message}/>
        <button onClick={this.changeMessage}>Change Greeting</button>
      </div>
    );
  }
}

export default GreetingClass;
