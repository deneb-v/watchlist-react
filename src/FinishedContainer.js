import React from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap'



function FinishedContainer() {
    return (
        <Container fluid style={{ paddingTop: 60 }}>
            <Row>
                <Col className="text-center text-light">
                    <h1>Finished List</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default FinishedContainer;
