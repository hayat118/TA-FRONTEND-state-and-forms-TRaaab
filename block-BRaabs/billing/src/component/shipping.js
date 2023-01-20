import React from "react";
import "../styles/index.css";

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: " e.g New Delhi",
      zip: "",
      city: "",
      country: "",
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      this.state.address + this.state.zip + this.state.city + this.state.country
    );
  };

  render() {
    return (
      <div className="box-shipping">
        <form onSubmit={this.handleSubmit}>
          <h1>Shipping Address</h1>

          <label htmlFor="address">Address</label>
          <br />
          <input
            onChange={this.handleInput}
            value={this.address}
            type="text"
            name="address"
            id="address"
          />
          <br />

          <label htmlFor="zip">Zip/Postal Code</label>
          <br />
          <input
            onChange={this.handleInput}
            value={this.zip}
            type="number"
            name="zip"
            id="zip"
          />
          <br />

          <label htmlFor="city">City</label>
          <br />
          <input
            onChange={this.handleInput}
            value={this.city}
            type="text"
            name="city"
            id="city"
          />
          <br />

          <label htmlFor="country">Country</label>
          <br />
          <input
            onChange={this.handleInput}
            value={this.country}
            type="text"
            name="country"
            id="country"
          />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Shipping;
