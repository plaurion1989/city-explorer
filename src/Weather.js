
import React from 'react';
import Row from 'react-bootstrap/Row';
import WeatherDay from './WeatherDay'

class Weather extends React.Component {

  render() {
    return (
      <>
        <Row>
          {this.props.weather.map(forecast => {
            return <WeatherDay day={forecast} />
          })
          }
        </Row>
      </>
    )
  }
}

export default Weather;
