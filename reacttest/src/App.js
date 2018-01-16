import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backlog: '',
      todo: '',
      inProgress: '',
      completed: ''


    }
  }

  inputBacklog(item){
    const { backlog } = this.state.backlog;
  }

  render() {
    const { backlog } = this.state

    return (
      <div className="App">
       
        <button className="btn btn-danger">
         clear
        </button>
        
        <form onSubmit={this.signIn} className='signup-main'>
              <FormGroup>
                <ControlLabel>Back Log</ControlLabel>
                <div>
                  <ul>
                    <li>
                     { backlog }
                    </li>
                  </ul>
                </div>
                <button onClick={() => this.inputBacklog(this.state.backlog)}>Submit</button>
                <FormControl
                  type='text'
                  placeholder='Back Log'
                  value={this.state.backlog}
                  onChange={event => this.setState({ backlog: event.target.value })}
                  className='input-format-register'
                />
                <ControlLabel>To-Do</ControlLabel>
                <div>
                  <ul>
                    <li>
                      test
                    </li>
                  </ul>
                </div>
                <button onClick={() => this.inputBacklog(this.state.backlog)}>Submit</button>
                <FormControl
                  type='text'
                  placeholder='to-do'
                  value={this.state.todo}
                  onChange={event => this.setState({ todo: event.target.value })}
                  className='input-format-register'
                />
                <ControlLabel>In Progress</ControlLabel>
                <div>
                  <ul>
                    <li>
                     test
                    </li>
                  </ul>
                </div>
                <button onClick={() => this.inputBacklog(this.state.backlog)}>Submit</button>
                <FormControl
                  type='text'
                  placeholder='In Progress'
                  value={this.state.inProgress}
                  onChange={event => this.setState({ inProgress: event.target.value })}
                  className='input-format-register'
                />
                <ControlLabel>Completed</ControlLabel>
                <div>
                  <ul>
                    <li>
                     test
                    </li>
                  </ul>
                </div>
                <button onClick={() => this.inputBacklog(this.state.backlog)}>Submit</button>
                <FormControl
                  type='text'
                  placeholder='Completed'
                  value={this.state.completed}
                  onChange={event => this.setState({ completed: event.target.value })}
                  className='input-format-register'
                />
              </FormGroup>
        </form>
        
       
        
      </div>
    );
  }
}

export default App;
