import axios from 'axios';
import React from 'react';
import './App.css'
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
    const styling = {
      color: "white",
      backgroundColor: "LightGreen",
      padding: "15px",
      fontFamily: "Arial",
    }
    const h1Style = {
      textAlign: "center",
    }
    const jumboStyle = {
      backgroundColor: "dodgerblue",
    }
    return (
      <>
        <div style={styling}>
        <h1 style={h1Style}>City Explorer</h1>
        <MyForm getLocationData={this.getLocationData} />
        
        <Jumbotron style={jumboStyle}>{this.state.location.display_name?<><h3>{this.state.location.display_name}</h3><img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`} alt={this.state.location.display_name}/>
        <p>Latitude:{this.state.location.lat}, Longitude:{this.state.location.lon}</p></>:''}</Jumbotron>
        </div>
      </>
    )
  }
}
export default App;
