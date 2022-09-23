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
				<h1>Saludos, {names.name} 👋😀</h1>
				<h3>Grupo B13, Subgrupo 5 - La tienda virtual 🛒📦💰</h3>
				<br />
				<p>Desarrollado  por los tripulantes: 👨‍💻</p>
				<ul>
					<li>Paula Andrea Valencia O. 👩‍🚀</li>
					<li>Edwin Fernando Ortega D. 👨‍🚀</li>
					<li>Jorge Andrés Pérez J. 👨‍🚀</li>
					<li>Henry Alexander Norza B. 👨‍🚀</li>
				</ul>
				<br />
				<h5>Gracias. 👍😎</h5>
			</Container>
		</>
	)
}

export default Inicio

