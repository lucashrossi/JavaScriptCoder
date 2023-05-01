let compras = ""
let compra = ""
let carro = ""
let empty = false


while (empty == false){

    compra = prompt("Ingrese Item")

    if (compra === "" || compra === null) {
        empty=true
    }else{
        compras = compras + " ," + compra
        console.log(compras)
    }
}

function comprado(carro){

    alert("Compras: " + carro)
    console.log(carro)
}

comprado(compras)