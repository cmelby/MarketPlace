import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import Card from "../Card/Index";
import "./style.css";


function renderContainer() {
    return(
    <Container>
        <Row>
            <Col>
                <Card/>
                <Card/>
            </Col>
            <Col>
                <Card/>
                <Card/>
            </Col>
            <Col>
                <Card/>
                <Card/>
            </Col>
            <Col>
                <Card/>
                <Card/>
            </Col>
            <Col>
                <Card/>
                <Card/>
            </Col>
            <Col>
                <Card/>
                <Card/>
            </Col>
        </Row>
    </Container>
    )
}

export default renderContainer;