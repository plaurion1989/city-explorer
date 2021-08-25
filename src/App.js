import axios from 'axios';
import React from 'react';
import './App.css'
import MyForm from './MyForm.js';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Weather from './Weather.js';

const server = `http://localhost:3002`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      errMessage:'',
      weatherData: [],
    }
  }
  getLocationData = async (location) => {
    try{
      let locationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${location}&format=json`);
      console.log(locationData.data[0]);
      
      this.setState({
        location: locationData.data[0],
        errMessage: ''
      })
      this.getWeather(location);
    }catch(err){
      this.setState({
        errMessage: `${err.message}`
      })
    }
  }
  getWeather = async (location) => {
    let lat = this.state.location.lat;
    let lon = this.state.location.lon;
    let searchQuery = location;
    let weatherData = await axios.get(`${server}/weather?searchQuery=${searchQuery}&lat=${lat}&lon=${lon}`);
    console.log(weatherData);
    this.setState({ weatherData: weatherData.data })
  }
  render() {
    const styling = {
      color: "white",
      backgroundColor: "LimeGreen",
      padding: "15px",
      fontFamily: "Arial",
    }
    const h1Style = {
      textAlign: "center",
    }
    const jumboStyle = {
      backgroundColor: "dodgerblue",
      margin: 'auto'
    }
    return (
      <>
        <div style={styling}>
        <h1 style={h1Style}>City Explorer</h1>
        <MyForm getLocationData={this.getLocationData} />
    
        <Jumbotron style={jumboStyle}>{this.state.errMessage?<p>{this.state.errMessage}</p>: ''}{this.state.location.display_name?<>
        <h3 style={{ textAlign: 'center'}}>{this.state.location.display_name}</h3>
        <Container style={{width:'650px', margin:'auto'}}>
        <Weather style={{marginBottom: '20px'}} weather={this.state.weatherData}/>
        <img style={{marginTop: '20px'}} src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=17`} alt={this.state.location.display_name}/>
        <p>Latitude:{this.state.location.lat}, Longitude:{this.state.location.lon}</p>
        </Container>
        </>:''}</Jumbotron>
        </div>
      </>
    )
  }
}
export default App;
