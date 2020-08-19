import React from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap'

import WatchCard from './WatchCard'



function NowWatchingContainer() {
    return (
        <Container fluid style={{ paddingTop: 70 }}>
            <Row>
                <Col className="text-center text-light">
                    <h1>Now Watching</h1>
                </Col>
            </Row>
            <Row className="flex-row flex-nowrap overflow-auto" style={{ height: 240 }}>
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
                <WatchCard />
            </Row>
        </Container>
    )
}

export default NowWatchingContainer;
