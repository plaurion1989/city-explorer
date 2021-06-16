import axios from 'axios';
import React from 'react';
import './App.css';
import MyForm from './MyForm.js';
import Jumbotron from 'react-bootstrap/Jumbotron';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    }
  }
  getLocationData = async (location) => {

    console.log(location);

    let locationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${location}&format=json`);

    console.log(locationData);

    this.setState({
      location: locationData.data[0]
    })
  }
  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <h2>Netlify Testing</h2>
        <MyForm getLocationData={this.getLocationData} />
        <Jumbotron>{this.state.location.display_name?<><h3>{this.state.location.display_name}</h3>
        <p>Latitude:{this.state.location.lat}, Longitude:{this.state.location.lon}</p></>:''}</Jumbotron>
      </>
    )
  }
}
export default App;
