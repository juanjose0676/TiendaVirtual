import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const NotFound = () => {
	return (
		<>
			<Container className="mt-5">
				<Row>
					<Col sm="12" md="12" lg="6">
						<Image src="NotFoundImg.png" width="550"/>
					</Col>
					<Col sm="12" md="12" lg="6">
						<h1 style={{fontSize: "7.5em"}}>404</h1>
						<h2>¡Oooop! 😲</h2>
						<p>La página que busca no existe. 🤷‍♂️<br />
						Cómo llegaste aquí es un misterio. 🤔<br />
						Pero puedes hacer clic en el botón de abajo 👇 para volver a la página de inicio.
						</p>
						<a href="/inicio" className="outline-dark" size="lg">INICIO</a>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default NotFound
