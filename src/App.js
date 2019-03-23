import React, { Component } from 'react';
// import Carousel from 'nuka-carousel';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';

// import logo from './logo.svg';
import './App.css';
import MyCard from './MyCard.js';
import MyAppBar from './MyAppBar.js';
import MyDrawer from './MyDrawer.js';

import {createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    // https://material-ui.com/style/typography/#migration-to-typography-v2
    useNextVariants: true,
    // In Japanese the characters are usually larger.
    fontSize: 12,
  },
});

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);


function Home(props) {
  return (
    <div/>
  );
}

function Section(props) {
  const { point_no } = props.match.params
  var cards = [];
  for(var i in props.scripts[point_no]) {
    const s = props.scripts[point_no][i];
    cards.push(<MyCard key={s.no} s={s} />)
  }
  return (
    <BindKeyboardSwipeableViews className="SwipeableView">
      {cards}
    </BindKeyboardSwipeableViews>
  );
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scripts: {},
      drawer: false,
    }
  }
  loadData() {
    console.log(window.location.origin)
    return fetch(window.location.origin + '/royal-300.json')
      .then(response => response.json())
      .then(data =>{
        return data;
      })
      .catch(err => console.error(this.props.url, err.toString()));
  }

  toggleDrawer() {
    const s = this.state.drawer;
    this.setState({drawer: !s});
  }

  componentDidMount() {
    this.loadData().then((english_scripts) => {
      //console.log(english_scripts);
      //const max_point_no = Math.max.apply(Math, english_scripts.map((s) => { return parseInt(s.point_no); }))
      for(var i in english_scripts) {
        const s = english_scripts[i];
        const point_no = parseInt(s.point_no);
        if (!this.state.scripts[point_no]) {
          this.state.scripts[point_no] = [];
        }
        this.state.scripts[parseInt(s.point_no, 10)].push(s)
      }
    })
  }


  render() {

    return (
      <div className="App" theme={theme}>
        {/*
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        */}
        <BrowserRouter>
          <MyAppBar toggleDrawer={() => this.toggleDrawer()} />
          <MyDrawer enabled={this.state.drawer} toggleDrawer={() => this.toggleDrawer()} numSections={Object.keys(this.state.scripts).length}/>
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/section/:point_no' render={(props) => <Section {...props} scripts={this.state.scripts} />}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
