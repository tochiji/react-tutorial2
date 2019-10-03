import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

function Example(){
  const [count,setCount] = useState(10);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=> setCount(count+1)}>
        Click me
      </button>
    </div>
  )
}

const mount = document.getElementById('root')
ReactDOM.render(<Example />, mount)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
