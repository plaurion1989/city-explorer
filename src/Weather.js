
import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component{
  
  render(){
    return(
      <>
      <Card style={this.props.style} >
      <h1>Weather Crap</h1>
      </Card>
      </>
    )
  }
}

export default Weather;