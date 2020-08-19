import React from 'react';
import './App.css';

import { Card, Button, Row, Col } from 'react-bootstrap'



function WatchCard() {
    return (
        <Col xl={4} lg={4} md={12} sm={12}>
            <Card style={{ maxWidth: 540 }}>
                <Row noGutters="true">
                    <Col md={4} className="d-flex align-items-center">
                        <Card.Img src="https://cdn.myanimelist.net/images/anime/1444/108005.jpg" />
                    </Col>

                    <Col md={8}>
                        <Card.Body className="p-2">
                            <Card.Title>Judul</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural
                                lead-in to
                                additional content. This content is a little bit longer.<a href="http://">Read
                                More</a>
                            </Card.Text>
                            <Button variant="info">Rewatch</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card >
        </Col>
    )
}

export default WatchCard;
