import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categorias from "./screens/Categorias";
import Productos from "./screens/Productos";
import NotFound from "./screens/NotFound";
import Login from "./screens/Login";
import Entradas from "./screens/Entradas";
import Salidas from "./screens/Salidas";
import Movimientos from "./screens/Movimientos";
import Inicio from "./screens/Inicio";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/inicio' element={<Inicio />} />
				<Route path='/movimientos' element={<Movimientos />} />
				<Route path='/salidas' element={<Salidas />} />
				<Route path='/entradas' element={<Entradas />} />
				<Route path='/categorias' element={<Categorias />} />
				<Route path='/productos' element={<Productos />} />
				<Route path='/' element={<Login />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
