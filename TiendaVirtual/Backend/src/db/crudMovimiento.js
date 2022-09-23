

const db = require("./firebase.js");


//  Mostrar movimientos
function getMovimientos(callback){
    return db.collection("Movimientos").get()
        .then((response)=>{
            var arrayMovimientos=[];
            response.forEach((doc)=>{
                arrayMovimientos.push(doc.data());
            })
            callback(arrayMovimientos);
    })
    .catch(erro=>{
        callback(`Error al obtener Entradas ${erro}  `);
    })

}

// Agregar movimiento
function addMovimiento(movimiento, callback){
    return db.collection('Movimientos').add(movimiento)
        .then(()=>{
            callback("Success");
        })
        .catch((err)=>{
            callback(`Error al Crear la Entrada ${err} `)
        })
}

module.exports={
    getMovimientos,
    addMovimiento,
}
