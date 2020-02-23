import React, { Component } from "react";

import {Form, Button, Col, Container, Row} from 'react-bootstrap'




class Payment extends Component {





    render() {
        return (
            <div>
            <Container>
                <Row className="p-5">
                    <Col className="Col-6 mt-5">
                    <h2><strong>Billing Address</strong></h2>
                    <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="name" placeholder="Full Name" />
                        </Form.Group>
        
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form.Row>
        
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
        
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>
        
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
        
                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>
        
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Shipping Address Same As Billing Address" />
                    </Form.Group>
        
                    <Button variant="primary" type="submit" href="/confirmation">
                        Submit
                    </Button>
                    </Form>
                    </Col>
        
            <Col className="Col-6 mt-5">
                <Form className="float-right">
                    <h2><strong>Payment Information</strong></h2>
                    <Form.Row>
                        <Form.Group as={Col}>
                        <Form.Label>Name On Card</Form.Label>
                        <Form.Control type="name" placeholder="Name On Card" />
                        </Form.Group>
                    </Form.Row>
        
                    <Form.Group >
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control placeholder="888-444-777-1111" />
                    </Form.Group>
        
                    <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Exp Month</Form.Label>
                        <Form.Control />
                        </Form.Group>
        
                        <Form.Group as={Col}>
                        <Form.Label>Exp Year</Form.Label>
                        <Form.Control />
                        </Form.Group>
        
                        <Form.Group as={Col}>
                        <Form.Label>CVC</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>
                  </Form>
                 </Col>
               </Row>
            </Container>
            </div>
        )
    }
}

export default Payment;