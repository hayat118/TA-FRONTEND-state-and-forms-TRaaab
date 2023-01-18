import React from "react";
import data from "../data.json";

import "../styles/index.css";
import Mvdetails from "../component/mvdetailes";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: data,
      isUser: true,
      user: "",
    };
  }

  handleClick = (list, i) => {
    this.setState({
      isUser: !this.state.isUser,
      user: this.state.user === i ? "" : i,
    });
    console.log(this.state.isUser);
  };

  render() {
    return (
      <>
        <h1>Movie List</h1>
        {data.map((list, i) => {
          // console.log(list, "list");
          return (
            <div className="box">
              <img src={list.Images[0]} alt="/" />
              <h2>{list.Title}</h2>
              <h3>{list.Released}</h3>
              <br />
              <button
                onClick={() => {
                  this.handleClick(list, i);
                }}
              >
                More Info
              </button>
              {this.state.user === i ? (
                <Mvdetails key={list.id} {...list} />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </>
    );
  }
}
export default Movie;
