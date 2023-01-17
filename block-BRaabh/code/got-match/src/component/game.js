import React from "react";
import data from "../data.json";
import "../styles/index.css";
import People from "./people";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHouse: "",
    };
  }

  handleClick = (house) => {
    this.setState({
      activeHouse: house,
    });
  };

  render() {
    let houseName = data.map((house) => house.name);
    // console.log(houseName);

    // let everyone = data.reduce((acc, house) => {
    //   acc = acc.concat(house.people);
    //   return acc;
    // }, []);

    let everyone;

    if (!this.state.activeHouse) {
      everyone = data.reduce((acc, house) => {
        acc = acc.concat(house.people);
        return acc;
      }, []);
    } else {
      console.log(data);
      const filtered = data.find(
        (house) => house.name === this.state.activeHouse
      );
      console.log(filtered);
      everyone = filtered?.people;
    }

    return (
      <>
        <h1>Select One House</h1>
        <hr />
        <ul>
          {houseName.map((house, index) => (
            <li
              className="tags"
              id={house === this.state.activeHouse ? "active" : ""}
              key={`${house}{index}`}
              onClick={() => this.handleClick(house)}
            >
              {house}
            </li>
          ))}
        </ul>
        <People everyone={everyone} />
      </>
    );
  }
}

export default Game;
