
import React from 'react';
import Card from 'react-bootstrap/Card';


class WeatherDay extends React.Component {

  render() {
    return (
      <Card style={{ color: 'black', width: '185px', marginLeft: '20px' }}>
        <Card.Title>Date: {this.props.day.date}</Card.Title>
        <Card.Text>Tempratures will be a {this.props.day.description}</Card.Text>
      </Card>
    )
  }
}

export default WeatherDay;
