import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

// import logo from './logo.svg';
import './App.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
 
const cardstyles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function MyCard(props) {
  const { s } = props;
  return (
    <Card className={s.no}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {s.english}
        </Typography>
        <Typography component="p">
          {s.japanese}
        </Typography>
        <Typography component="p">
          {s.note}
        </Typography>
      </CardContent>
      {/*
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      */}
    </Card>
  );
}

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
        var cards = [];
        for(var i in this.state.english_scripts) {
          cards.push(<MyCard s={this.state.english_scripts[i]} />);
        }

        <Carousel className="App-header">
          {cards}
        </Carousel>
      </div>
    );
  }
}

export default App;
