//import React from 'react'
import Divisor from "../components/Divisor";
import { Navigate } from "react-router-dom"
import { Container, Row, Col, Table } from "react-bootstrap";
import { getProductos } from '../apis/ProductosCrud';
import React, { useState, useEffect } from "react";
import CreateCategoria from "../components/categorias/CreateCategoria";//   uso de ejemplo
import CreateProducto from "../components/productos/CreateProducto";
import EditProducto from "../components/productos/EditProducto";

var style, valorEstado;

function estado(estad){
    if(estad){ 
        style="text-success";
        valorEstado="Activo";
    }else{
        style="text-danger";
        valorEstado="Inactivo";
    }

}

const Productos = () => {

    const [results, setResults]= useState([])
    const id =results.length + 1;
    useEffect(()=>{
        getProductos(setResults);
    }, []);

    if (localStorage.getItem("data") == undefined) {
		return <Navigate to="/" />
	}

    
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h2>Listado de Productos</h2>
                    </Col>
                    <Col>
                        <CreateProducto lastId={id}/>
                    </Col>
                </Row>
                <Divisor />
                <Table responsive striped hover>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((res,index)=>(
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{res.Nombre}</td>
                                {estado(res.Estado)}
                                <td class={style}><strong>{valorEstado}</strong></td>
                                <td>{res.Categoria}</td>
                                <td>{res.Cantidad}</td>
                                <td>
                                    <EditProducto modifyId={{Nombre:res.Nombre, Estado: res.Estado, Id: index+1}}/>
                                </td>
                            </tr>
                        ))

                        //     <--  lo que agregué           lo que había -->
                        /* <tr>
                            <th scope="row">1</th>
                            <td>Chocolatina</td>
                            <td class="text-success"><strong>Activo</strong></td>
                            <td>Dulces</td>
                            <td>0</td>
                            <td>
                                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#editarModal">Editar</button>
                            </td>
                        </tr> */}
                    </tbody>
                </Table>
            </Container>
        </>
        
    )
    
}



export default Productos
