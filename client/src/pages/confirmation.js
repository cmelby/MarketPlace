import React, { Component } from "react";
import {Container, Button, Jumbotron, Row} from 'react-bootstrap'





class Confirmation extends Component {
    
    render() {
        return (
            <Container className="bg-light text-black p-5">
                <Row className="bg-light text-black p-5">
            <Jumbotron className="bg-light text-black p-5">
            <h1>Success!</h1>
            <p>
              Your product will arrive in 5-10 business days!
            </p>
            <p>
              <Button variant="primary" href="/">Return To Main Menue</Button>
            </p>
          </Jumbotron>
          </Row>
          </Container>
        )
    }
}

export default Confirmation;