var acu = 1;

function clonar() {
    var c = document.getElementById("lista");
    var clon = c.cloneNode("lista");
    document.getElementById("clones").appendChild(clon);
    clon.children[0].children[1].value = "";
    clon.children[0].children[1].id = "producto" + acu;

    clon.children[1].children[1].value = "0";
    clon.children[1].children[1].id = "cantidad" + acu;

    clon.children[2].children[1].value = "0";
    clon.children[2].children[1].id = "valor" + acu;

    clon.children[3].children[1].value = "0";
    clon.children[3].children[1].id = "total" + acu;

    acu += 1;

    calcular()
}

function date() {
    var hoy = new Date();
    var day = hoy.getDate();
    var formatDay = day >= 1 && day <= 9 ? "0" + day : day;
    var fecha = hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + formatDay;
    var minute = hoy.getMinutes();
    var minute = minute >= 1 && minute <= 9 ? "0" + minute : minute;
    var hour = hoy.getHours();
    var hour = hour >= 0 && hour <= 9 ? "0" + hour : hour;
    var hora = hour + ':' + minute;
    var fechaYHora = fecha + 'T' + hora;
    var date = fecha + " " + hora;
    return {
        dateFormat: fechaYHora,
        date: date
    };
}

function calcular() {
    for (let i = 0; i < acu; i++) {
        var cantidad = document.getElementById("cantidad" + i).value;
        var valor = document.getElementById("valor" + i).value;
        var cal = cantidad * valor;
        document.getElementById("total" + i).value = cal;
    }
}

function getElement(){
    var productos = [];
    for (let i = 0; i < acu; i++) {
        var producto = document.getElementById("producto" + i).value;
        var cantidad = document.getElementById("cantidad" + i).value;
        var valor = document.getElementById("valor" + i).value;

        productos.push({
            Nombre: producto,
            Cantidad: cantidad,
            Valor: valor
        });
    }
    return productos;
}

function total() {
    setInterval(() => {
        calcular();
    }, 1000);
}

export {
    clonar,
    date,
    calcular,
    total,
    getElement
}