# Norbert - Tienda de Maquillaje Online

Repositorio del proyecto **Norbert**, una tienda en línea enfocada en productos de belleza, maquillaje y cuidado personal. La aplicación tiene en consideración tanto la experiencia del usuario/cliente como la administración del sistema.

---

## Descripción del Proyecto

El sistema se divide en dos módulos principales:

1. **Módulo Tienda (Público):** Interfaz para clientes donde pueden ver el catálogo (labios, rostro, ojos), revisar los artículos del blog, ponerse en contacto, registrarse e iniciar sesión.
2. **Módulo Administrador (Privado):** Panel de control (Dashboard) enfocado en la gestión de inventario (crear, editar y listar productos) y la administración de los usuarios registrados.

---

## Características Principales

* **Catálogo de Cosméticos:** Carga y despliegue dinámico de productos con sus imágenes, precios y categorías.
* **Manejo de Sesión y Carrito:** Uso de `localStorage` para persistir los elementos del carrito y la sesión activa.
* **Validaciones Frontend:** Scripts en JavaScript para validar datos antes de enviar formularios (formato de RUT chileno, longitud de claves y dominios permitidos para correo como `@duoc.cl`, `@profesor.duoc.cl` y `@gmail.com`).
* **Carga Dinámica:** Selectores de Región y Comuna vinculados que se rellenan mediante eventos JS.
* **Diseño e Interfaz:** Maquetación limpia en CSS, adaptada para funcionar correctamente en navegadores modernos.

---

## Tecnologías Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**

---

## Instalación y Ejecución Local

Para levantar el proyecto en un servidor local utilizando **XAMPP**:

1. Descarga o clona este repositorio dentro de la carpeta `htdocs` de tu instalación de XAMPP:
`C:\xampp\htdocs\tiendamaquillajeFrontend-main`
2. Abre el **XAMPP Control Panel** e inicia el servicio de **Apache**.
3. Ingresa a la siguiente dirección desde tu navegador:

[http://localhost/tiendamaquillajeFrontend-main/pagina_principal_home.html](http://localhost/tiendamaquillajeFrontend-main/pagina_principal_home.html)
