import React from 'react';
import './css/App.css';
import Line from './components/Line';
import Details from './components/Details'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        data: [],
        lastUpdate: null,
        lines: []
    }
  }

  componentDidMount = () =>{
    this.fetchData();
    this.intervalId = setInterval(() => this.fetchData(), 300000)
  }

  componentWillUnmount = () =>{
    clearInterval(this.intervalId);
  }

  fetchData = () =>{
    axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(response => this.setState({data: response.data, lastUpdate: moment().toString()}))
      .then(() => this.setStations());
  }

  setStations = () =>{
    let tempArr = [];
    this.state.data.map( result =>{ tempArr.push(result.id)});
    this.setState({lines: tempArr});
  }
  
  render(){
    if(this.state.data.length !== 0){
      return(
        <Router>
          <div className="App">
            <Switch>
              <Route path='/line'>
                <Details lines={this.state.lines} data={this.state.data} updated={this.state.lastUpdate}></Details>
              </Route>
              <Route exact path='/'>
                  <div className="Title"><h1>How is the London Underground right now?</h1></div>
                  <div className="Dashboard">
                    {this.state.data.map((tubeline) => <Line info = {tubeline}></Line>)}
                  </div>
                  <div className="lastUpdated">
                    <p>Last updated: {this.state.lastUpdate}</p>
                  </div>
              </Route>
            </Switch>
          </div>
        </Router>
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
