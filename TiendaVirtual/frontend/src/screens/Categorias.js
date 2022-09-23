import React, { useState, useEffect } from "react";
import Divisor from "../components/Divisor";
import { getCategorias } from "../apis/CategoriasCrud";
import CreateCategoria from "../components/categorias/CreateCategoria";
import EditCategoria from "../components/categorias/EditCategoria";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Categorias = () => {
	const [results, setResults] = useState([]);
	const id = results.length + 1;
	useEffect(() => {
		getCategorias(setResults);
	}, []);

	if (localStorage.getItem("data") == undefined) {
		return <Navigate to="/" />
	}
	return (
		<>
			<Container className="mt-5">
				<Row>
					<Col>
						<h2>Categorías de productos</h2>
					</Col>
					<Col>
						<CreateCategoria lastId={id}/>
					</Col>
				</Row>
				<Divisor />
				<Table responsive striped hover>
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Nombre</th>
							<th scope="col">Opciones</th>
						</tr>
					</thead>
					<tbody>
						{results.map((res, index) => (
							<tr>
								<th scope="row">{index+1}</th>
								<td>{res.Nombre}</td>
								<td>
									<EditCategoria modifyId={{Nombre: res.Nombre, Id: index+1}}/>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</>
	)
}

export default Categorias
