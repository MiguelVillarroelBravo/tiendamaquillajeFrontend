// Datos de regiones y comunas
var data_regiones = [
    {
        id: 1,
        nombre: "Región Metropolitana",
        comunas: ["Santiago", "Puente Alto", "Maipú", "Providencia"]
    },
    {
        id: 2,
        nombre: "Región de Valparaíso",
        comunas: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana"]
    },
    {
        id: 3,
        nombre: "Región del Biobío",
        comunas: ["Concepción", "Talcahuano", "Los Ángeles", "San Pedro de la Paz"]
    }
];

function cargar_regiones() {
    var select_region = document.getElementById("campo_region");
    if (!select_region) return;
    
    var html = '<option value="">Seleccione una región</option>';
    for (var i = 0; i < data_regiones.length; i++) {
        html += '<option value="' + data_regiones[i].id + '">' + data_regiones[i].nombre + '</option>';
    }
    select_region.innerHTML = html;
}

function actualizar_comunas() {
    var select_region = document.getElementById("campo_region");
    var select_comuna = document.getElementById("campo_comuna");
    
    var id_region = select_region.value;
    var html = '<option value="">Seleccione una comuna</option>';
    
    if (id_region !== "") {
        for (var i = 0; i < data_regiones.length; i++) {
            if (data_regiones[i].id == id_region) {
                var comunas = data_regiones[i].comunas;
                for (var j = 0; j < comunas.length; j++) {
                    html += '<option value="' + comunas[j] + '">' + comunas[j] + '</option>';
                }
                break;
            }
        }
    }
    
    select_comuna.innerHTML = html;
}

// Cargar las regiones al iniciar si el script está en la página
window.onload = function() {
    cargar_regiones();
};
