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


// const stock = [
//     {nombre: "a", descripcion: "ProductoA", precio: 10, cantidad: 1, foto: "./2023.png"},
//     {nombre: "b", descripcion: "ProductoB", precio: 11, cantidad: 2, foto: "./2023.png"},
//     {nombre: "c", descripcion: "ProductoC", precio: 12, cantidad: 3, foto: "./2023.png"},
//     {nombre: "d", descripcion: "ProductoD", precio: 13, cantidad: 4, foto: "./2023.png"},
//     {nombre: "e", descripcion: "ProductoE", precio: 14, cantidad: 5, foto: "./2023.png"},
//     {nombre: "f", descripcion: "ProductoF", precio: 15, cantidad: 6, foto: "./2023.png"},
//     {nombre: "g", descripcion: "ProductoG", precio: 16, cantidad: 7, foto: "./2023.png"},
//     {nombre: "h", descripcion: "ProductoH", precio: 17, cantidad: 8, foto: "./2023.png"},
//     {nombre: "i", descripcion: "ProductoI", precio: 18, cantidad: 9, foto: "./2023.png"},
//     {nombre: "j", descripcion: "ProductoJ", precio: 19, cantidad: 0, foto: "./2023.png"}
// ]


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
                        <form id="formCarrito${id}">
                        <input name="id" type="hidden" value="${id}">
                        <input name="cuantos" type="number" value="1" min="1" max="${cantidad}">
                        <button type="submit">Agregar</button>
                        </form>
                        
                        
    `
    Tarjetas.append(tarjeta)
}




const verStocks = async () =>{
    const res = await fetch("./stock.json")
    const stocks = await res.json()
    stocks.forEach(prod =>{
        if(prod.cantidad !=0){
            verItem(prod)
            agregarC(prod.id)
        }
        
    })
}

// const verStock = () =>{

//     stock.forEach(item =>{
//         if(item.cantidad !=0){
//             verItem(item)
//             localStorage.setItem("carrito",JSON.stringify(carrito))
//         }
        
//     })
// }

verStocks()


const agregarC = (id) =>{
    const formCarrito = document.querySelector("#formCarrito" + id)
    formCarrito.addEventListener("submit",(e)=>{
        e.preventDefault()
        console.log(e.target)
        const cuantos = e.target.children["cuantos"].value
        carrito.push({
            id,
            cuantos
        })
        localStorage.setItem("carrito",JSON.stringify(carrito))
  
          Toastify({
            text: "Agregado!",
            duration: 3000,
            gravity: "top", 
            position: "center", 
            style: {
                background: "green",
                width: "150px",
                textAlign: "center",
                borderRadius: "5px"
              }
            }).showToast();
            
            
    })
}