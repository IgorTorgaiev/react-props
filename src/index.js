import React from 'react';
import ReactDOM from 'react-dom';

// React Props

// class Laptop extends React.Component {
//   render() {
//     return <h1>Recently, I purchased the new device {this.props.brand}</h1>;
//   }
// }
// const point = <Laptop brand="Hewlett Packard" />;
// ReactDOM.render(point, document.getElementById("root"));

// Pass Data

class Laptop extends React.Component {
  render() {
    return <h2>I wish to buy a new electronic device, for example, {this.props.brand}</h2>;
  }
}

class Phone extends React.Component {
  render() {
    const laptop = "Asus";
    return (
      <div>
      <h1>And, I want to buy Samsung </h1>
      <Laptop brand={laptop}/>
      </div>
    );
  }
}
ReactDOM.render(<Phone />, document.getElementById('root'));