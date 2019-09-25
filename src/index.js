import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function WarningBanner(props) {
  if(!props.warn){
    return null;
  }
  return(
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {showWarning:true};
  }

  handleToggleClick = () =>{
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render(){
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(<Page />,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
