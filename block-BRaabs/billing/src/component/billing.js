import React from "react";
// import Shipping from "./shipping";

import "../styles/index.css";

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ischeckd: false,
      address: " e.g New Delhi",
      zip: "",
      city: "",
      country: "",
      shipping: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
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

  oncheck = () => {
    this.setState({
      ischeckd: !this.state.ischeckd,
    });
  };

  render() {
    return (
      <div className="flex">
        <form className="box-billing" onSubmit={this.handleSubmit}>
          <h1>Shipping Address</h1>
          <p></p>

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

        {this.state.ischeckd ? (
          <form className="box-billing">
            <h2 className="heading">Billing Address</h2>
            <label className="checklabel">
              <input
                className="check"
                onClick={this.oncheck}
                type="checkbox"
                name="ischecked"
              />
              Same as the shipping address?
            </label>
            <br />
            <label htmlFor="address">Address</label>
            <br />
            <input
              onClick={this.handleInput}
              value={this.state.address}
              type="text"
              name="address"
              id="address"
              placeholder="eg. New Delhi Vasant Vihar"
            />
            <br />
            <label htmlFor="zip">ZIP/Postal Code</label>
            <br />
            <input
              onClick={this.handleInput}
              value={this.state.zip}
              type="number"
              name="zip"
              id="zip"
              placeholder="eg.17757"
            />
            <br />
            <label htmlFor="city">City</label>
            <br />
            <input
              onClick={this.handleInput}
              value={this.state.city}
              type="text"
              name="city"
              id="city"
              placeholder="eg.New Delhi"
            />
            <br />
            <label htmlFor="country">Country</label>
            <br />
            <input
              onClick={this.handleInput}
              value={this.state.country}
              type="text"
              name="country"
              id="country"
              placeholder="eg.India"
            />
            <br />
          </form>
        ) : (
          <form className="box-shipping">
            <h2 className="heading">Billing Address</h2>
            <label className="checklabel">
              <input
                className="check"
                onClick={this.oncheck}
                type="checkbox"
                name="ischecked"
              />
              Same as the shipping address?
            </label>
            <br />
            <label htmlFor="address">Address</label>
            <br />
            <input
              onClick={this.handleInput}
              value={this.state.shipping.address}
              type="text"
              name="address"
              id="address"
              placeholder="eg. New Delhi Vasant Vihar"
            />
            <br />
            <label htmlFor="zip">ZIP/Postal Code</label>
            <br />
            <input
              onClick={this.handleInput}
              value={this.state.shipping.address}
              type="number"
              name="zip"
              id="zip"
              placeholder="eg.17757"
            />
            <br />
            <label htmlFor="city">City</label>
            <br />
            <input
              onClick={this.handleInput}
              value={this.state.shipping.address}
              type="text"
              name="city"
              id="city"
              placeholder="eg.New Delhi"
            />
            <br />
            <label htmlFor="country">Country</label>
            <br />
            <input
              onClick={this.handleInput}
              value={this.state.shipping.address}
              type="text"
              name="country"
              id="country"
              placeholder="eg.India"
            />
            <br />
          </form>
        )}
      </div>
    );
  }
}

export default Billing;
