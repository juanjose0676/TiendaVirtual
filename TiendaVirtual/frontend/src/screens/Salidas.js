import React from 'react';
import Divisor from '../components/Divisor';
import { Navigate } from "react-router-dom"
import FormMovimiento from '../components/FormMovimiento';
import { Container, Row, Col } from "react-bootstrap";

const Salidas = () => {
    if (localStorage.getItem("data") == undefined) {
		return <Navigate to="/" />
	}
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h2>Salida de Productos</h2>
                    </Col>
                </Row>
                <Divisor />
                <FormMovimiento />
            </Container>
        </>
    )
}

export default Salidas
