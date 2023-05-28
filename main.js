class Item {
    constructor(nombre,descripcion,precio,cantidad){
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.catidad = cantidad
        this.foto
        
    }
}

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []


const stock = [
    {nombre: "a", descripcion: "ProductoA", precio: 10, cantidad: 1, foto: "./2023.png"},
    {nombre: "b", descripcion: "ProductoB", precio: 11, cantidad: 2, foto: "./2023.png"},
    {nombre: "c", descripcion: "ProductoC", precio: 12, cantidad: 3, foto: "./2023.png"},
    {nombre: "d", descripcion: "ProductoD", precio: 13, cantidad: 4, foto: "./2023.png"},
    {nombre: "e", descripcion: "ProductoE", precio: 14, cantidad: 5, foto: "./2023.png"},
    {nombre: "f", descripcion: "ProductoF", precio: 15, cantidad: 6, foto: "./2023.png"},
    {nombre: "g", descripcion: "ProductoG", precio: 16, cantidad: 7, foto: "./2023.png"},
    {nombre: "h", descripcion: "ProductoH", precio: 17, cantidad: 8, foto: "./2023.png"},
    {nombre: "i", descripcion: "ProductoI", precio: 18, cantidad: 9, foto: "./2023.png"},
    {nombre: "j", descripcion: "ProductoJ", precio: 19, cantidad: 0, foto: "./2023.png"}
]


const verItem = ({id,nombre,descripcion,precio,cantidad,foto }) =>{
    const Tarjetas = document.querySelector("#Tarjetas")
    const tarjeta = document.createElement("div")
    tarjeta.className = "Tarjeta"
    tarjeta.innerHTML = `
                        <img src="${foto}" alt="">
                        <div class="contenido">
                            <h3>${nombre}</h3>
                            <p>${descripcion}</p>
                            <span><b>Precio:</b> ${precio}$</span>
                        </div>
                        
                        
    `
    Tarjetas.append(tarjeta)
}



const verStock = () =>{

    stock.forEach(item =>{
        if(item.cantidad !=0){
            verItem(item)
            localStorage.setItem("carrito",JSON.stringify(carrito))
        }
        
    })
}

verStock()