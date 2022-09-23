import React, { useState, useEffect } from "react";
import { date, clonar, total, getElement } from "../scripts";
import { Row, Col, Form, Button } from "react-bootstrap";
import { searchProductos } from "../apis/ProductosCrud";
import { addMovimiento } from "../apis/MovimientosCrud"

const FormMovimiento = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        searchProductos(setResults);
    }, []);
    
    const f = date();
    const ff = f.dateFormat;

    function save(even) {
        even.preventDefault();
        const movi = document.getElementById("movi").value;
        var Productos = getElement();
        var detalles = document.getElementById("detalles").value;
        const fecha = f.date;

        for (let i = 0; i < Productos.length; i++) {
            var obj = {
                Movimiento: movi,
                Fecha: fecha,
                Detalles: detalles,
                Producto: Productos[i].Nombre,
                Cantidad: Productos[i].Cantidad,
                Valor: Productos[i].Valor
            }
            addMovimiento(obj, (res)=>{
                if(res == "Success"){
                    console.log("Succes");
                }
            });
        }

        window.location.href="http://localhost:3000/movimientos";
    }

    return (
        <>
            <Form onSubmit={save} onload={total()}>
                <Row>
                    <Col md="3">
                        <Form.Label for="id">No. Movimiento:</Form.Label>
                        <Form.Control type="number" name="id" id="movi" value="123456789" disabled />
                    </Col>
                    <Col md="3">
                        <Form.Label for="date">Fecha:</Form.Label>
                        <Form.Control type="datetime-local" id="date" defaultValue={ff} />
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col md="1" sm="1">
                        <br />
                        <Button onClick={() => { clonar() }} className="btn btn-success float-right mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </Button>
                    </Col>
                </Row>
                <Row id="lista" className="mb-3">
                    <Col>
                        <Form.Label for="producto">Productos:</Form.Label>
                        <Form.Select aria-label="Productos" className="form-control" name="producto" id="producto0" required>
                            <option value="">Seleccionar...</option>
                            {results.map((res) => (
                                <option value={res.Nombre}>{res.Nombre}</option>
                            ))}
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label for="cantidad">Cantidad:</Form.Label>
                        <Form.Control type="number" name="cantidad" id="cantidad0" required />
                    </Col>
                    <Col>
                        <Form.Label for="valor">Valor unitario:</Form.Label>
                        <Form.Control type="number" name="valor" id="valor0" required />
                    </Col>
                    <Col>
                        <Form.Label for="total">Total:</Form.Label>
                        <Form.Control type="number" name="total" id="total0" disabled />
                    </Col>
                </Row>
                <div id="clones"></div>
                <Row className="mt-3">
                    <Col>
                        <Form.Label for="date">Detalles:</Form.Label>
                        <Form.Control as="textarea" rows={4} name="detalles" id="detalles" required></Form.Control>
                    </Col>
                </Row><br />
                <Row>
                    <Col>
                        <Button variant="success" type="submit" className="my-4 btn-lg btn-block">
                            Guardar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default FormMovimiento