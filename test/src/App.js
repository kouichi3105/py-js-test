import './App.css';
import React from 'react';
import { Button } from '@material-ui/core';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const server = 'http://localhost:5000/hello';
const post_server = 'http://localhost:5000/data';

const style = { width: 400, margin: 50};

//function App() {
export class App extends React.Component {

  constructor(props){
    super();
    this.state = {
      text: '',
      post: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  handleClick() {
    fetch(server, {
      method: "GET",
    }).then(response => response.text())
    .then(text => {
      // console.log(text);
      this.setState({text: text});
    });    
  }

  handleClick2() {
    fetch(post_server, {
      method: "POST",
      body: "test_post"
    }).then(response => response.text())
    .then(text => {
      this.setState({post: text});
    });    
  }

  onReset() {
    this.setState({text: '',post: ''});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={style}>
            <p>Speed</p>
            <Slider />
            <DriveEtaIcon />
          </div>
          <Button variant="contained" color="primary" onClick={this.handleClick}>Get Data</Button>
          <p>{this.state.text}</p>
          <Button variant="contained" color="secondary" onClick={this.handleClick2}>Post Data</Button>
          <p>{this.state.post}</p>
          <Button variant="contained" onClick={this.onReset}>Reset</Button>
        </header>
      </div>
    );
  }
}

export default App;
