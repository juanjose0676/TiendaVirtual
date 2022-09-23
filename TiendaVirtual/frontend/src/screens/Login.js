import React from "react";
import ButtonLogIn from "../components/ButtonLogIn";
import { Container } from "react-bootstrap";

const Login = () => {
	return (
		<>
			<Container className="mt-5">
				<h1>Login</h1>
				{/* <img src={imgBack} width="1120px" height="450px"></img> */}
				<ButtonLogIn />
			</Container>
		</>
	)
}

export default Login
