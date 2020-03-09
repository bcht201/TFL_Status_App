import React from 'react';
import './css/App.css';
import Line from './components/Line';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        data: [],
        lastUpdated: null
    }
  }

  componentDidMount = () =>{
    this.fetchData();
  }

  fetchData = () =>{
    axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(response => this.setState({data: response.data}))
  }
  
  render(){
    if(this.state.data.length !== 0){
      return(
        <div className="App">
          <div><h1>How is the London Underground right now?</h1></div>
          <div className="Dashboard">
            {this.state.data.map((tubeline) => <Line info = {tubeline}></Line>)}
          </div>
        </div>
      )
    }
    else{
      return (
        <h1>Loading...</h1>
      );
    }
  }
}

export default App;
