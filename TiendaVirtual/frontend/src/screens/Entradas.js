import React from 'react'
import Divisor from "../components/Divisor";
import { Navigate } from "react-router-dom";
import FormMovimiento from "../components/FormMovimiento";
import { Container, Row, Col, Form, } from "react-bootstrap";

const Entradas = () => {
    if (localStorage.getItem("data") == undefined) {
		return <Navigate to="/" />
	}
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h2>Entrada de Productos</h2>
                    </Col>
                </Row>
                <Divisor />
                <FormMovimiento />
            </Container>
        </>
    )
}

export default Entradas
