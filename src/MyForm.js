import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class MyForm extends React.Component {

  formSubmit = e => {
    e.preventDefault();
    this.props.getLocationData(e.target.location.value)
  }
  render() {
    return (
      <>
        <Form onSubmit={this.formSubmit}>
          <Form.Group controlId="location">
            <Form.Label>Search Cities by Name</Form.Label>
            <Form.Control placeholder="Enter City Name" />
            <Form.Text className="text-muted">
              Find your city ANYWHERE ON EARTH!
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
      </>
    )
  }
}

export default MyForm;