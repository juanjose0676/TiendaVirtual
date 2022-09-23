const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const dbC = require("./src/db/crudCategorias.js");
const dbP = require("./src/db/crudProductos.js");
const dbE = require("./src/db/crudMovimiento.js");

app.use(express.json());
app.use(cors());

//Index app
app.get("/", function (req, res) {
    res.send("Index del la tienda virtual");
});

app.listen(port, () => {
    console.log("My port " + port);
});

//Categorías
app.get("/categorias", function (req, res) {
    dbC.getCategorias(function (arrayCategorias) {
        res.send(arrayCategorias);
    })
});

app.get('/categorias/:id', function (req, res) {
    const id = req.params.id;
    dbC.getCategoria(id, function (categoria) {
        res.json(categoria);
    })
})

app.post('/categorias/:id', (req, res) => {
    const id = req.params.id;
    const categoria = req.body;
    dbC.addCategoria(id, categoria, function (response) {
        res.send(response);
    })
})

app.patch('/categorias/:id', (req, res) => {
    const id = req.params.id;
    const categoria = req.body;
    dbC.updateCategoria(id, categoria, function (response) {
        res.send(response);
    })
})

//Productos
app.get("/productos", function (req, res) {
    dbP.getProductos(function (arrayProductos) {
        res.send(arrayProductos);
    })
});

app.get('/productos/:id', function (req, res) {
    const id = req.params.id;
    dbP.getProducto(id, function (producto) {
        res.json(producto);
    })
})

app.get('/searchProductos/', function (req, res) {
    dbP.searchProductos(function (arraySProductos) {
        res.send(arraySProductos);
    })
})

app.post('/productos/:id', (req, res) => {
    const id = req.params.id;
    const producto = req.body;
    dbP.addProducto(id, producto, function (response) {
        res.send(response);
    })
})

app.patch('/productos/:id', (req, res) => {
    const id = req.params.id;
    const producto = req.body;
    dbP.updateProducto(id, producto, function (response) {
        res.send(response);
    })
})


//  Movimientos
app.get('/movimientos', function (req, res) {
    dbE.getMovimientos(function (arrayMovimientos) {
        res.send(arrayMovimientos);
    })
});

app.post('/movimientos', (req, res) => {
    const movimiento = req.body;
    dbE.addMovimiento(movimiento, function (response) {
        res.send(response);
    })
})

// app.patch('/entradas/:id', (req, res) => {
//     const id = req.params.id;
//     const entrada = req.body;
//     dbE.updateEntrada(id, entrada, function (response) {
//         res.send(response);
//     })
// })

//  Salidas
// app.get('/salidas', function (req, res) {
//     dbS.getSalidas(function (arraySalidas) {
//         res.send(arraySalidas);
//     })
// })

// app.post('/salidas', (req, res) => {
//     const salida = req.body;
//     dbS.addSalidas(salida, function (response) {
//         res.send(response);
//     })
// })

// app.patch('/salidas/:id', (req, res) => {
//     const id = req.params.id;
//     const salida = req.body;
//     dbS.updateSalida(id, salida, function (response) {
//         res.send(response);
//     })
// })







