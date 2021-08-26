import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class Movies extends React.Component {

  render() {
    return (
      <>
        <Row>
          {this.props.movies.map(movie => {
            return <Card style={{ color: 'black', width: '250px', marginLeft: '20px' }}>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              {/* <Card.Img><img style={{width:'150px'}} src={movie.image_url} alt={movie.title} /></Card.Img> */}
              <Card.Footer>
                <Card.Text>{movie.release_date}</Card.Text>
              </Card.Footer>
            </Card>
          })
          }
        </Row>
      </>
    )
  }
}

export default Movies;
