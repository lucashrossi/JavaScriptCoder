class Item {
    constructor(nombre,descripcion,precio,cantidad){
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.catidad = cantidad
        this.fecha
        
    }
}

const stock = [
    {nombre: "a", descripcion: "", precio: 10, cantidad: 1, fecha: Date.now()},

]
console.log(stock)
let listo = false
let accion = 0


accion = prompt("Para agregar 1, para eliminar 2")

switch (accion) {
  case "1":
    while(listo === false){
        const nombre = prompt("Nombre").toUpperCase()
        const descripcion = prompt("Descripcion").toUpperCase()
        const precio = parseFloat(prompt("Precio")) 
        const cantidad = parseInt(prompt("Stock")) 
        const item = new Item(nombre,descripcion,precio,cantidad)
        stock.push(item)
        listo = confirm("Fin de carga?")
    }
    break
  case "2"  :
    while(listo === false){
        const eliminar = prompt("Que item?")
        const index = stock.findIndex((item)=> item.nombre === eliminar)

        if(index != -1){
            stock.splice(index,1)
            alert("Item eliminado")
        }else{
            alert("No existe")
        }

        listo = confirm("Fin de eliminacion?")
    }
    break
  default:
    console.log("Otro")
}

console.log(stock)
alert("Exit")