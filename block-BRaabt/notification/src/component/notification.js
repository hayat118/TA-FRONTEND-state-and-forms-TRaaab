import React from "react";

import "../styles/index.css";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleClick = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.handleClick}>SHOW DEFAULT</button>
        <button>SHOW SUCCESS</button>
        <button>SHOW ERROR</button>
        <button>SHOW WARNING</button>
        <button>SHOW INFO</button>
      </div>
    );
  }
}

export default Notification;
