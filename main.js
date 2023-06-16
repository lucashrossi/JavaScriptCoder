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


verStocks()

let cuantosT = 0

const agregarC = (id) =>{
    const formCarrito = document.querySelector("#formCarrito" + id)
    formCarrito.addEventListener("submit",(e)=>{
        e.preventDefault()
        console.log(e.target)
        let cuantos = e.target.children["cuantos"].value
        console.log(cuantos)

        const index = carrito.findIndex((item)=> item.id === id)

        if(index != -1){
            carrito.splice(index,1)
        }

        carrito.push({
            id,
            cuantos,
            
        })
        localStorage.setItem("carrito",JSON.stringify(carrito))

        const numeroC = document.querySelector("#carrito")
        const numeroCSD = document.querySelector("#sc")
        numeroCSD.remove()
        
        cuantosT = parseInt(cuantosT) + parseInt(cuantos)
        const numeroCS = document.createElement("span")
        numeroCS.innerHTML = `
     
            <span id="sc">${cuantosT}</span>
        `
        numeroC.append(numeroCS)
  
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