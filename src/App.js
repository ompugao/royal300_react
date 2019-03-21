import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {english_scripts: []}
  }
  loadData() {
    console.log(window.location.href)
    fetch(window.location.href + '/royal-300.json')
      .then(response => response.json())
      .then(data =>{
        this.setState({english_scripts: data})
      })
      .catch(err => console.error(this.props.url, err.toString()))
  }
  componentDidMount() {
    this.loadData()
  }

  render() {
    return (
      <div className="App">
        {/*
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        */}
        <Carousel className="App-header">
            <div>
            </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
