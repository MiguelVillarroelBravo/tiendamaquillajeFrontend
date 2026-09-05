function limpiar_errores() {
    var cajas_errores = document.getElementsByClassName("error");
    for (var i = 0; i < cajas_errores.length; i++) {
        cajas_errores[i].innerHTML = "";
    }
}

function validar_rut_formato(rut) {
    // Verificar longitud (7 a 9 caracteres)
    if (rut.length < 7 || rut.length > 9) {
        return false;
    }
    // Verificar que no tenga puntos ni guiones
    if (rut.indexOf(".") !== -1 || rut.indexOf("-") !== -1) {
        return false;
    }
    return true;
}

function validar_correo(correo) {
    var dominios_permitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    for (var i = 0; i < dominios_permitidos.length; i++) {
        var dominio = dominios_permitidos[i];
        // Verificar si el correo termina con el dominio permitido
        if (correo.indexOf(dominio) !== -1 && correo.indexOf(dominio) === (correo.length - dominio.length)) {
            return true;
        }
    }
    return false;
}

function procesar_usuario() {
    limpiar_errores();
    var valido = true;
    
    var rut = document.getElementById("campo_rut").value;
    var correo = document.getElementById("campo_correo").value;
    
    if (!validar_rut_formato(rut)) {
        document.getElementById("mensaje_campo_rut").innerHTML = "El RUT debe tener entre 7 y 9 caracteres, sin puntos ni guion.";
        valido = false;
    }
    
    if (!validar_correo(correo)) {
        document.getElementById("mensaje_campo_correo").innerHTML = "El correo debe pertenecer a @duoc.cl, @profesor.duoc.cl o @gmail.com.";
        valido = false;
    }
    
    if (valido) {
        alert("Usuario procesado correctamente.");
        // Aquí se enviaría el formulario
    }
}

function procesar_producto() {
    limpiar_errores();
    var valido = true;
    
    var nombre = document.getElementById("campo_nombre").value;
    var precio = document.getElementById("campo_precio").value;
    
    if (nombre.length === 0) {
        document.getElementById("mensaje_campo_nombre").innerHTML = "El nombre es obligatorio.";
        valido = false;
    }
    
    if (isNaN(precio) || precio <= 0 || precio.length === 0) {
        document.getElementById("mensaje_campo_precio").innerHTML = "El precio debe ser un número mayor a 0.";
        valido = false;
    }
    
    if (valido) {
        alert("Producto procesado correctamente.");
    }
}
