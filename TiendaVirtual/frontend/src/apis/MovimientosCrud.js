import axios from "axios";
var url = "https://latiendavirtual.herokuapp.com/movimientos/";

function getMovimientos(callback) {
    axios.get(url)
        .then((res) => {
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

function addMovimiento(movimiento, callback) {
    axios.post(url, movimiento)
    .then((res) => {
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}

export {
    getMovimientos,
    addMovimiento
}