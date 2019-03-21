import React, { Component } from 'react';
// import Carousel from 'nuka-carousel';

// import logo from './logo.svg';
import './App.css';
import MyCard from './MyCard.js';

import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 12,
  },
});

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
    var cards = [];
    for(var i in this.state.english_scripts) {
      cards.push(<MyCard
        key={this.state.english_scripts[i].no}
        s={this.state.english_scripts[i]} />)
      //if (i === "10") {
        //break;
      //}
    }

    return (
      <div className="App" theme={theme}>
        {/*
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        */}
        {/* <Carousel className="App-header"> */}
        {/* </Carousel> */}
        {cards}
      </div>
    );
  }
}

export default App;
