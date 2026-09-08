

function obtener_carrito() {
    let carrito_guardado = localStorage.getItem("carrito_norbert");
    if (carrito_guardado) {
        return JSON.parse(carrito_guardado);
    } else {
        return [];
    }
}

function guardar_carrito(carrito) {
    localStorage.setItem("carrito_norbert", JSON.stringify(carrito));
}


function mostrar_producto() {
    console.log("-- funcion mostrar_producto --");

    let carrito = obtener_carrito();
    let contenedor = document.getElementById("contenedor_detalle_producto");
    let total = 0;

    if (carrito.length == 0) {
        contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    } else {
        contenedor.innerHTML = "";

        for (let i = 0; i < carrito.length; i++) {
            let producto = carrito[i];
            let subtotal = producto.precio * producto.cantidad;
            total = total + subtotal;

            contenedor.innerHTML = contenedor.innerHTML +
                "<div class='parrafo_detalle_producto'>" +
                "<strong>" + producto.nombre + "</strong><br>" +
                "Precio unitario: $" + producto.precio + "<br>" +
                "Cantidad: " +
                "<button type='button' onclick='restar_cantidad(" + producto.id + ")'>-</button> " +
                producto.cantidad +
                " <button type='button' onclick='sumar_cantidad(" + producto.id + ")'>+</button><br>" +
                "Subtotal: $" + subtotal + "<br>" +
                "<button type='button' onclick='quitar_producto(" + producto.id + ")'>Quitar</button>" +
                "</div><hr>";
        }
    }

    document.getElementById("total_carrito").innerHTML = "TOTAL: $" + total;
}


function sumar_cantidad(id_producto) {
    console.log("-- funcion sumar_cantidad --");
    let carrito = obtener_carrito();

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id == id_producto) {
            carrito[i].cantidad = carrito[i].cantidad + 1;
        }
    }

    guardar_carrito(carrito);
    mostrar_producto();
}


function restar_cantidad(id_producto) {
    console.log("-- funcion restar_cantidad --");
    let carrito = obtener_carrito();

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id == id_producto && carrito[i].cantidad > 1) {
            carrito[i].cantidad = carrito[i].cantidad - 1;
        }
    }

    guardar_carrito(carrito);
    mostrar_producto();
}


function quitar_producto(id_producto) {
    console.log("-- funcion quitar_producto --");
    let carrito = obtener_carrito();
    let carrito_nuevo = [];

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id != id_producto) {
            carrito_nuevo.push(carrito[i]);
        }
    }

    guardar_carrito(carrito_nuevo);
    mostrar_producto();
}


function vaciar_carrito() {
    console.log("-- funcion vaciar_carrito --");
    localStorage.removeItem("carrito_norbert");
    mostrar_producto();
}


mostrar_producto();