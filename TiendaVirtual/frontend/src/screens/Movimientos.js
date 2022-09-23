import React, { useState, useEffect } from "react";
import Divisor from "../components/Divisor";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Table } from "react-bootstrap";
import { getMovimientos } from "../apis/MovimientosCrud";

const Movimientos = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        getMovimientos(setResults);
    }, []);
    
    if (localStorage.getItem("data") == undefined) {
        return <Navigate to="/" />
    }

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h2>Movimientos de Productos</h2>
                    </Col>
                </Row>
                <Divisor />
                <Table responsive striped hover>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Valor unitario</th>
                            <th scope="col">Valor Total</th>
                            <th scope="col">Movimiento</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((res, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{res.Producto}</td>
                                <td>{res.Cantidad}</td>
                                <td>${res.Valor}</td>
                                <td>${res.Cantidad * res.Valor}</td>
                                <td style={{ color: "green" }}><strong>Entrada</strong></td>
                                <td>{res.Fecha}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Movimientos