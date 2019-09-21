import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      players: ["石原","山田"],
      playerNow: 0
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      ()=> this.tick()
    ,1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timeID);
  }

  tick(){
    this.setState({date: new Date()})
    this.setState({playerNow: this.state.playerNow === 0 ? 1 : 0})
  }

  render(){
    const player = this.state.players[this.state.playerNow]
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <h3>the Player is {player}</h3>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
