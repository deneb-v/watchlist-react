import React from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap'



function WaitingListContainer() {
    return (
        <Container fluid style={{ paddingTop: 60 }}>
            <Row>
                <Col className="text-center text-light">
                    <h1>Waiting List</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default WaitingListContainer;
