import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import Devices from './components/Devices';
import AddDevice from './components/AddDevice';
import About from './components/pages/About';
//import {v4 as uuid} from "uuid";
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    devices : []
  }


  componentDidMount() {
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
    return body;
  };

  //Toggle Complete
  markComplete = (id) => {
    this.setState( {devices: this.state.devices.map(device => {
      if(device.id === id) {        
        device.STATUS = !device.STATUS
        axios.put(`/device/${id}/${device.STATUS}`)
        .then(res => this.setState({ devices: res.data.devices}))
      }
      return device;
    })
  }) 
  }

  // Delete Device
  delDevice = (id) => {
      axios.delete(`/device/${id}`)
     // .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)]      
     .then(res =>  this.setState({ devices: res.data.devices})
    );
  }

  // Add Device
  addDevice = (title) => {
    axios.post('/device', {
      title
    })
    // .then(res => this.setState({devices: [...this.state.devices, res.data]})
    .then(res =>  this.setState({ devices: res.data.devices})
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
            <AddDevice addDevice={this.addDevice}/>
            <div id="TitleBar" style={{display:'flex', padding:'10px'}}>
              <h3 style={{flex:'5', padding:'5px'}}> Device Name </h3> 
              <h3 style={{flex:'2', padding:'5px'}}>Status</h3> 
            </div>
            
            <Devices devices={this.state.devices} markComplete={this.markComplete} delDevice={this.delDevice}/>
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
