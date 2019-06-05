import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {the_dog: "unknown dog"};
    this.handleChange = this.handleChange.bind(this);
    // This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callBackendAPI = this.callBackendAPI.bind(this);
  }

  handleSubmit(event) {
    this.callBackendAPI()
    .then(res => this.setState({ the_dog: res.toString() }))
    .catch(err => console.log(err));
    event.preventDefault();
  }

  callBackendAPI = async () => {
    const response = await fetch('http://localhost:4000/dog');

    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;
};

  handleChange(event) {
    this.setState({the_dog: event.target.value});
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.the_dog} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
          <br />{this.state.the_dog}
        </header>
        
      </div>
    );
  }
}



export default App;
