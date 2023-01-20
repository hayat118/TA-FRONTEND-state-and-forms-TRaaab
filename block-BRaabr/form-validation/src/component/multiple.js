import React from "react";
import "../styles/index.css";

class Multiple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // textinput: "",
      username: "",
      dateinput: "",
      fileinput: "",
      textinput: "",
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.username + " " + this.state.dateinput);
  };

  render() {
    return (
      <>
        <div className="box">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Text Input</label>
            <br />
            <input
              onChange={this.handleInput}
              value={this.state.username}
              type="text"
              name="username"
              id="username"
            />
            <br />

            <br />

            <label htmlFor="dateinput">Date Input</label>
            <br />
            <input
              onChange={this.handleInput}
              value={this.state.dateinput}
              type="date"
              name="dateinput"
              id="dateinput"
            />
            <br />

            <br />

            <label htmlFor="fileinput">File Input</label>
            <br />
            <input
              onChange={this.handleInput}
              value={this.state.fileinput}
              type="file"
              name="fileinput"
              id="fileinput"
            />
            <br />

            <br />

            <label htmlFor="readonly">Read Only Input</label>
            <br />
            <input
              onChange={this.handleInput}
              value={this.state.readonly}
              type="text"
              name="readonly"
              id="readonly"
            />
            <br />
            <br />

            <label htmlFor="textinput">Text Area</label>
            <br />
            <textarea
              onChange={this.handleInput}
              value={this.state.textinput}
              type="text"
              name="textinput"
              id="textinput"
            />
            <br />
            <input type="submit" value="Submit" />
            <br />
          </form>
        </div>
      </>
    );
  }
}
export default Multiple;
