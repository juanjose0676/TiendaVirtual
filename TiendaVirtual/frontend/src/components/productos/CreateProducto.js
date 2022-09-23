import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addProducto } from "../../apis/ProductosCrud";
import { getCategorias } from "../../apis/CategoriasCrud";


const CreateProducto = (props) => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        getCategorias(setResults);
    }, []);

    const { lastId } = props;
    function Create() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        function save(even) {
            even.preventDefault();
            const obj = {
            Nombre: even.target[0].value,
            Categoria: even.target[1].value,
            Cantidad: 0,
            Estado: true
            }
            addProducto(lastId, obj, (res) => {
                if (res == "Success") {
                    window.location.href = "http://localhost:3000/productos";
                }
            });
        }
        return (
            <>
                <Button variant="success" className="float-right" onClick={handleShow} >
                    Nuevo Producto
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Form onSubmit={save} >
                        <Modal.Header>
                            <Modal.Title>Crear Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>Nombre Producto:  </Form.Label>
                                <Form.Control type="rext" controlId="nameProduc" required />
                                <Form.Label>Categoría:  </Form.Label>
                                <Form.Select aria-label="Categorias" className="form-control">
                                    {results.map((res, index) => (
                                        <option value={res.Nombre}>{res.Nombre}</option>
                                    ))}
                                </Form.Select>
                                <Form.Control type="hidden" controlId="id" defaultValue={lastId} required />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                            <Button variant="success" type="submit"  >
                                Guardar
                            </Button>
                        </Modal.Footer>
                    </Form>

                </Modal>



            </>
        );
    }

    return (<Create />);
}

export default CreateProducto;
