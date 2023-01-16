import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      steps: 5,
    };
  }

  handleIncrementFive=(e)=>{

     console.log(e.target.innerText);
     this.setState({
       counter:Number(`${e.target.innerText}`)
     })
  }

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + this.state.steps,
    });
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - this.state.steps,
    });
  };

  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <h2>Steps</h2>
        <button onClick={(e) => this.handleIncrementFive(e)}>5</button>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
        <button onClick={() => this.handleReset()}>Reset</button>
      </>
    );
  }
}


export default Counter;