import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { updateCategoria } from "../../apis/CategoriasCrud"

const EditCategoria = (props) => {
	const modifyId = props.modifyId.Id;
	const nameCategoria = props.modifyId.Nombre;
	
	function Edit() {
		const [showEdit, setShow] = useState(false);

		const editClose = () => setShow(false);
		const editShow = () => setShow(true);

		function save(even){
			even.preventDefault();
        	const obj = {
            Nombre: even.target[0].value
			}
			updateCategoria(modifyId, obj, (res)=>{
            	if(res == "Success"){
               		window.location.href="http://localhost:3000/categorias";
        		}
				console.log(res);
			});
		}

		return (
			<>
				<Button variant="warning" onClick={editShow}>
					Editar
				</Button>

				<Modal show={showEdit} onHide={editClose}>
					<Form onSubmit={save}>
						<Modal.Header>
							<Modal.Title>Editar Categoría</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form.Group>
								<Form.Label>Nombre Categoría: </Form.Label>
								<Form.Control type="text" controlId="nameCategory" defaultValue={nameCategoria} required />
								<Form.Control type="hidden" controlId="id" defaultValue={modifyId} required />
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={editClose}>
								Cerrar
							</Button>
							<Button variant="warning" type="submit">
								Actualizar
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</>
		);
	}

	return (<Edit />);
}

export default EditCategoria
