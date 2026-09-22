let carrito = [];
let botonesAgregar = document.querySelectorAll(".btn-agregar");
let cuerpoCarrito = document.getElementById("cuerpo-carrito");
let totalCarrito = document.getElementById("total-carrito");
let cantidadCarrito = document.getElementById("cantidad-carrito");
botonesAgregar.forEach(function(boton) {

    boton.addEventListener("click", function() {
        let nombre = boton.getAttribute("data-nombre");
        let precio = boton.getAttribute("data-precio");
        let producto = {
            nombre: nombre,
            precio: Number(precio)
        };
        carrito.push(producto);
        mostrarCarrito();

    });

});

function mostrarCarrito() {

    cuerpoCarrito.innerHTML = "";
    let total = 0;
    carrito.forEach(function(producto, indice) {
        total = total + producto.precio;
        let fila = document.createElement("tr");
        let columnaNombre = document.createElement("td");

        columnaNombre.textContent = producto.nombre;

        let columnaPrecio = document.createElement("td");

        columnaPrecio.textContent = "$" + producto.precio;
        
        let columnaAccion = document.createElement("td");
        let botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("btn");
        botonEliminar.classList.add("btn-danger");
        botonEliminar.classList.add("btn-sm");
        botonEliminar.addEventListener("click", function() {

            carrito.splice(indice, 1);
            mostrarCarrito();

        });


        columnaAccion.appendChild(botonEliminar);
        fila.appendChild(columnaNombre);
        fila.appendChild(columnaPrecio);
        fila.appendChild(columnaAccion);
        cuerpoCarrito.appendChild(fila);
    });
    totalCarrito.textContent = total;
    cantidadCarrito.textContent = carrito.length;
}