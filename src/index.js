import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

function Repeat(props){
  const items = []
  for(let i=0;i<props.numTimes;i++){
    items.push(props.children(i))
  }
  return <div>{items}</div>
}

function ListOfTenThings(){
  return (
    <Repeat numTimes={10}>
      {i => <div key={i}>This is item {i} in the list</div>}
    </Repeat>
  )
}

const mount = document.getElementById('root')
ReactDOM.render(<ListOfTenThings />, mount)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
