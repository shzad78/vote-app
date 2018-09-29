import React, { Component } from 'react';
import TodoList from './TodoList'
import logo from './logo.svg';
import './App.css';

const Message = ({message})=> {
  return(
  (message)?  <div>{message}</div> : (<div> no meesage</div>)
  )
}
const items = [
  {
      id: 2,
      description: 'get out of bed',
      done: 'true'
  },
  {
      id: 2,
      description: 'brush teeth',
      done: 'false'
  },
  {
      id: 3,
      description: 'breakfast',
      done: 'false'
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoList items={items}/>
        </header>
        <p className="App-intro">
         <Message message={null} />
        </p>
      </div>
    );
  }
}

export default App;
