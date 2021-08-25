
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class Weather extends React.Component {

  render() {
    return (
      <>
      <Row>
        {this.props.weather.map(day => {
          return <Card style={{color:'black', width:'185px', marginLeft:'20px'}}>
            <Card.Title>Date: {day.date}</Card.Title>
            <Card.Text>Tempratures will be a {day.description}</Card.Text>
          </Card>
        })
        }
        </Row>
      </>
    )
  }
}

export default Weather;
