import React from "react";
import "../styles/index.css";

class Font extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Type Here"
          />
        </form>
        <section className="box">
          <div className="fontstyle">
            <div className="design">
              <h2>Roboto</h2>
              <p>Critian Robortson</p>
            </div>
            <small>1 Style</small>

            <p className="para1 one">{this.state.text}</p>
          </div>

          <div className="fontstyle">
            <div className="design">
              <h2>Potta One</h2>
              <p>Font Zone 108</p>
            </div>
            <small>1 Style</small>

            <p className="para1 two">{this.state.text}</p>
          </div>

          <div className="fontstyle">
            <div className="design">
              <h2>Noto</h2>
              <p>Critian Robortson</p>
            </div>
            <small>1 Style</small>

            <p className="para1 three">{this.state.text}</p>
          </div>
        </section>
      </>
    );
  }
}
export default Font;
