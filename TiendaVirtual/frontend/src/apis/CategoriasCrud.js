import axios from "axios";
var url = "https://latiendavirtual.herokuapp.com/categorias/";

function getCategorias(callback) {
    axios.get(url)
        .then((res) => {
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

function addCategoria(id, categoria, callback) {
    axios.post(url + id, categoria)
    .then((res) => {
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}

function updateCategoria(id, categoria, callback) {
    axios.patch(url + id, categoria)
    .then((res) => {
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}

export {
    getCategorias,
    addCategoria,
    updateCategoria
}