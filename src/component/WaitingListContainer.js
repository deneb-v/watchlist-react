import React from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap'

import Wishcard from './WishCard'

function WaitingListContainer() {
    return (
        <Container fluid style={{ paddingTop: 70 }}>
            <Row>
                <Col className="text-center text-light">
                    <h1>Waiting List</h1>
                </Col>
            </Row>
            <Row className="flex-row flex-nowrap overflow-auto" style={{ height: 240 }}>
                <Wishcard />
                <Wishcard />
                <Wishcard />
                <Wishcard />
                <Wishcard />
            </Row>
        </Container>
    )
}

export default WaitingListContainer;
