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



// Helper para validar dominios permitidos
function es_correo_valido(correo) {
    var dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    for (var i = 0; i < dominiosPermitidos.length; i++) {
        if (correo.endsWith(dominiosPermitidos[i])) {
            return true;
        }
    }
    return false;
}




// VALIDACIÓN INICIO DE SESIÓN

function validar_login() {
    var correo = document.getElementById("campo_correo_login").value.trim();
    var clave = document.getElementById("campo_clave_login").value;

    var errorCorreo = document.getElementById("mensaje_campo_correo_login");
    var errorClave = document.getElementById("mensaje_campo_clave_login");

    // Limpiar mensajes de error previos
    errorCorreo.innerText = "";
    errorClave.innerText = "";

    var valido = true;

    // Validación Correo
    if (correo === "") {
        errorCorreo.innerText = "El correo es requerido.";
        valido = false;
    } else if (correo.length > 100) {
        errorCorreo.innerText = "El correo no debe superar los 100 caracteres.";
        valido = false;
    } else if (!es_correo_valido(correo)) {
        errorCorreo.innerText = "Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com.";
        valido = false;
    }

    // Validación Contraseña
    if (clave === "") {
        errorClave.innerText = "La contraseña es requerida.";
        valido = false;
    } else if (clave.length < 4 || clave.length > 10) {
        errorClave.innerText = "La contraseña debe tener entre 4 y 10 caracteres.";
        valido = false;
    }

    if (valido) {
        alert("¡Inicio de sesión exitoso!");
        // Aquí se puede redirigir al home o realizar el login
        window.location.href = "pagina_principal_home.html";
    }
}


// VALIDACIÓN CONTACTO

function procesar_contacto() {
    var nombre = document.getElementById("campo_nombre_contacto").value.trim();
    var correo = document.getElementById("campo_correo_contacto").value.trim();
    var comentario = document.getElementById("campo_mensaje_contacto").value.trim();

    var errorNombre = document.getElementById("mensaje_campo_nombre_contacto");
    var errorCorreo = document.getElementById("mensaje_campo_correo_contacto");
    var errorComentario = document.getElementById("mensaje_campo_mensaje_contacto");

    // Limpiar errores previos
    errorNombre.innerText = "";
    errorCorreo.innerText = "";
    errorComentario.innerText = "";

    var valido = true;

    // Nombre
    if (nombre === "") {
        errorNombre.innerText = "El nombre es requerido.";
        valido = false;
    } else if (nombre.length > 100) {
        errorNombre.innerText = "El nombre no debe superar los 100 caracteres.";
        valido = false;
    }

    // Correo
    if (correo !== "") {
        if (correo.length > 100) {
            errorCorreo.innerText = "El correo no debe superar los 100 caracteres.";
            valido = false;
        } else if (!es_correo_valido(correo)) {
            errorCorreo.innerText = "Solo se permiten correos @duoc.cl, @profesor.duoc.cl y @gmail.com.";
            valido = false;
        }
    }

    // Comentario
    if (comentario === "") {
        errorComentario.innerText = "El comentario es requerido.";
        valido = false;
    } else if (comentario.length > 500) {
        errorComentario.innerText = "El comentario no debe superar los 500 caracteres.";
        valido = false;
    }

    if (valido) {
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
        document.getElementById("form_contacto_cliente").reset();
    }
}