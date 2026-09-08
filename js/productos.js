
let arreglo_catalogo = [
    { id: 1, nombre: "Labial Rojo Mate", precio: 5000 },
    { id: 2, nombre: "Base de Maquillaje", precio: 12000 },
    { id: 3, nombre: "Máscara de Pestañas", precio: 8500 },
    { id: 4, nombre: "Sombra de Ojos", precio: 9900 },
    { id: 5, nombre: "Rubor en Crema", precio: 7500 },
    { id: 6, nombre: "Brillo Labial", precio: 4500 },
    { id: 7, nombre: "Delineador Líquido", precio: 6000 },
    { id: 8, nombre: "Polvo Traslúcido", precio: 10000 },
    { id: 9, nombre: "Iluminador Facial", precio: 11000 },
    { id: 10, nombre: "Corrector de Ojeras", precio: 6500 },
    { id: 11, nombre: "Fijador de Maquillaje", precio: 8000 },
    { id: 12, nombre: "Bálsamo Hidratante", precio: 3900 }
];

function anadir_al_carrito(id_producto) {
    console.log("-- funcion anadir_al_carrito (catalogo) --");

  
    let producto;
    for (let i = 0; i < arreglo_catalogo.length; i++) {
        if (arreglo_catalogo[i].id == id_producto) {
            producto = arreglo_catalogo[i];
        }
    }

   
    let carrito_guardado = localStorage.getItem("carrito_norbert");
    let carrito;
    if (carrito_guardado) {
        carrito = JSON.parse(carrito_guardado);
    } else {
        carrito = [];
    }

    
    let ya_estaba = false;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id == producto.id) {
            carrito[i].cantidad = carrito[i].cantidad + 1;
            ya_estaba = true;
        }
    }

    if (!ya_estaba) {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    localStorage.setItem("carrito_norbert", JSON.stringify(carrito));

    
}