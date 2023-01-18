import React from "react";

class Mvdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: true,
    };
  }

  handleClose = () => {
    this.setState({
      isUser: !this.state.isUser,
    });
  };

  render() {
    // console.log(this.props, "props");
    return (
      <>
        {this.state.isUser ? (
          <div>
            <p> {this.props.Year}</p>
            <p> {this.props.Rated}</p>
            <p> {this.props.Runtime}</p>
            <p> {this.props.Genre}</p>
            <p> {this.props.Directer}</p>
            <p> {this.props.Writer}</p>
            <p> {this.props.Actors}</p>
            <p> {this.props.Plot}</p>
            <p> {this.props.Language}</p>
            <p> {this.props.Country}</p>
            <p> {this.props.Awards}</p>
            <p> {this.props.Metascope}</p>
            <p> {this.props.imbdRating}</p>
            <p> {this.props.imbdVotes}</p>
            <p> {this.props.Type}</p>
            <p> {this.props.Response}</p>
            <p>
              {this.props.Images.map((img) => {
                return (
                  <>
                    <img src={img} alt="/" />
                  </>
                );
              })}
            </p>
            <button onClick={this.handleClose}>Close </button>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Mvdetails;
