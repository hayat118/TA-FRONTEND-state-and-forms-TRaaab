import React from 'react';
// import ReactDOM from 'react-dom/client'
import '../component/styles/index.css'



class CreateUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "./assets/show-image.png",
    };
  }

  handleBasketball = () => {
    this.setState({
      image: "./assets/basketball.jpg",
    });
  };
  handleCricket = () => {
    this.setState({
      image: "./assets/cricket.jpg",
    });
  };
  handleLaptop = () => {
    this.setState({
      image: "./assets/laptop.jpg",
    });
  };

  handlePhone = () => {
    this.setState({
      image: "./assets/phone.jpg",
    });
  };

  handlePubg = () => {
    this.setState({
      image: "./assets/pubg.jpeg",
    });
  };

  handleTiger = () => {
    this.setState({
      image: "./assets/tiger.jpg",
    });
  };

  render() {
    return (
      <>
        <h1>Image...</h1>
        <img src={this.state.image} alt="img" />
        <button
          onClick={() => {
            this.handleBasketball();
          }}
        >
          Basket Ball
        </button>
        <button
          onClick={() => {
            this.handleCricket();
          }}
        >
          Cricket
        </button>
        <button
          onClick={() => {
            this.handleLaptop();
          }}
        >
          Laptop
        </button>
        <button
          onClick={() => {
            this.handlePhone();
          }}
        >
          Phone
        </button>
        <button
          onClick={() => {
            this.handlePubg();
          }}
        >
          Pubg
        </button>
        <button
          onClick={() => {
            this.handleTiger();
          }}
        >
          Tiger
        </button>
      </>
    );
  }
}


export default CreateUI;