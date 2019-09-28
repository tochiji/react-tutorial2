import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''}
  }
  handleChange = (event)=>{
    this.setState({value:event.target.value});
  }
  handleSubmit = (event) =>{
    alert('A name was submitted: ' + this.state.value);
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text"
                 value={this.state.value}
                 onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )}
}

class EssayForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.',
      texts: []
    }
  }
  handleChange = (event)=>{
    this.setState({value: event.target.value})
  }
  handleSubmit = (event) =>{
    const texts = this.state.texts.slice();
    texts.push(this.state.value);
    this.setState({texts: texts})
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {this.state.texts.map(t =>
        <div>{t}</div>
      )}
      </div>
    )
  }
}

class FlavorForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { value: ['ハズレ','coconutだね']};
  }
  handleChange = (event) =>{
    const value = this.state.value.splice();
    value.push(event.target.value)
    this.setState({value:value});
  }
  handleSubmit = (event) =>{
    alert('あなたの好きな味は' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select multiple value={this.state.value} onChange={this.handleChange}>
            <option value="ハズレ">Grapefruit</option>
            <option value="limeやね">Lime</option>
            <option value="coconutだね">Coconut</option>
            <option value="mangoだね">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
