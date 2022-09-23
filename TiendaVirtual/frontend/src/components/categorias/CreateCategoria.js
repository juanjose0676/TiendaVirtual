import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addCategoria } from "../../apis/CategoriasCrud"

const CreateCategoria = (props) => {
	const { lastId } = props;
	function Create() {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		function save(even){
			even.preventDefault();
        	const obj = {
            Nombre: even.target[0].value
			}
			addCategoria(lastId, obj, (res)=>{
            	if(res == "Success"){
               		window.location.href="http://localhost:3000/categorias";
        		}
			});
		}

		return (
			<>
				<Button variant="success" className="float-right" onClick={handleShow}>
					Nueva Categoría
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Form onSubmit={save}>
						<Modal.Header>
							<Modal.Title>Crear Categoría</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form.Group>
								<Form.Label>Nombre Categoría: </Form.Label>
								<Form.Control type="text" controlId="nameCategory" required />
								<Form.Control type="hidden" controlId="id" defaultValue={lastId} required />
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Cerrar
							</Button>
							<Button variant="success" type="submit">
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

export default CreateCategoria
