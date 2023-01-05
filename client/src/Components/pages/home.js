import React from 'react'
import { Row, Col, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const home = () => {
  return (
    <div>
        <Row>
            <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div>
                    <h1>versa is a chat app that lets you connect and share</h1>
                    <LinkContainer to="/chatPage">
                        <Button variant="Success">
                        Get Started
                        </Button>
                    </LinkContainer>
                </div>
            </Col>
        </Row>    
    </div>
  )
}

export default home