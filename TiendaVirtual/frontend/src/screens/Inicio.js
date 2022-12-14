import React from "react"
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Inicio = () => {
	const names = JSON.parse(localStorage.getItem("data"));
	if (localStorage.getItem("data") == undefined) {
		return <Navigate to="/" />
	}
	return (
		<>
			<Container className="mt-5">
				<h1>Saludos, {names.name} ππ</h1>
				<h3>Grupo B13, Subgrupo 5 - La tienda virtual ππ¦π°</h3>
				<br />
				<p>Desarrollado  por los tripulantes: π¨βπ»</p>
				<ul>
					<li>Paula Andrea Valencia O. π©βπ</li>
					<li>Edwin Fernando Ortega D. π¨βπ</li>
					<li>Jorge AndrΓ©s PΓ©rez J. π¨βπ</li>
					<li>Henry Alexander Norza B. π¨βπ</li>
				</ul>
				<br />
				<h5>Gracias. ππ</h5>
			</Container>
		</>
	)
}

export default Inicio

