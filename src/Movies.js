import React from 'react';
import Row from 'react-bootstrap/Row';
import Movie from './Movie.js';

class Movies extends React.Component {

  render() {
    return (
      <>
        <Row>
          {this.props.movies.map(film => {
            return <Movie movie={film}/>
          })
          }
        </Row>
      </>
    )
  }
}

export default Movies;
