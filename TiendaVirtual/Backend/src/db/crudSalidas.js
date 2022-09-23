
const { response } = require("express");
const db =require("./firebase");

//  mostrar Salidas
function getSalidas(callback){
    return db.collection("Salidas").get()
        .then((response)=>{
            var arraySalidas=[];
            response.forEach((doc)=>{
                 arraySalidas.push(doc.data());
            })
            callback(arraySalidas);
        })
        .catch(error=>{
            callback(`Error al buscar las Salidas ${error}`);
        })
}

// añadir salidas
function addSalidas(Salida, callback){
    return db.collection('Salidas').add(Salida)
        .then(()=>{
            callback("Salida Realizada");
        })
        .catch((err)=>{
            callback(`Error al Crear la Salida ${err} `)
        })

}

//  actualizar
function updateSalida(id,salida,callback){
    return db.collection('Salidas').doc(id).update(salida)
        .then(() => {
            callback("Salida Actulizada");
        }).catch((err) => {
            callback(`Error al actualizar Salida ${err}`);
        });
}

module.exports={
    getSalidas,
    addSalidas,
    updateSalida
}
