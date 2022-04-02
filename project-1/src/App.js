import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    name: 'Eric',
    count: 0
  }
  
  handlePClick = () => {
    this.setState ({name: 'p4kz'})
  }

  handleAClick = (event) => {
    event.preventDefault()
    const { count } = this.state
    this.setState ({count: count + 1})
  }

  render() {
    const { name, count } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            Hello React {name} {count}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            by: p4kz
          </a>
        </header>
      </div>
    );
  }
}

export default App;
