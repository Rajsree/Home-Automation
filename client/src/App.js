import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import {v4 as uuid} from "uuid";
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos : [],
    data : null
  }


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))

        // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));

    this.getDevices()
      .then(res => this.setState({ devices: res.devices}))
      .catch(err => console.log(err));
    }

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  getDevices = async () => {
    const response = await fetch('/devices');
    const body = await response.json();  
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body);
    return body;
  };

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();
  
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  //Toggle Complete
  markComplete = (id) => {
    console.log('From APP.js',id)
    this.setState( {todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)]
      }));
  }

  // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed : false
    })
    .then(res => this.setState({todos: [...this.state.todos, res.data]})
    );
  }

  render() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            <p className="App-intro">{this.state.data}</p>
        
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
         </div>
    </div>
    </Router>
  );
  }
}

export default App;
