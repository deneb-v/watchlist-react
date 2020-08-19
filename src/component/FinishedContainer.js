import React from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap'

import FinishCard from './FinishCard.js'

function FinishedContainer() {
    return (
        <Container fluid style={{ paddingTop: 70 }}>
            <Row>
                <Col className="text-center text-light">
                    <h1>Finished List</h1>
                </Col>
            </Row>
            <Row className="flex-row flex-nowrap overflow-auto" style={{ height: 240 }}>
                <FinishCard />
                <FinishCard />
                <FinishCard />
                <FinishCard />
                <FinishCard />
                <FinishCard />
            </Row>
        </Container>
    )
}

export default FinishedContainer;
