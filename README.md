# Norbert - Tienda de Maquillaje Online 💄✨

Este repositorio está enfocado en el desarrollo de una tienda en línea especializada en belleza, maquillaje y cuidado personal llamada **Norbert**.

## 📋 Descripción del Proyecto

La aplicación está diseñada siguiendo los lineamientos de la Especificación de Requisitos de Software (ERS) y se divide en dos módulos principales:
1. **Módulo Tienda (Público):** Interfaz para los clientes donde pueden explorar el catálogo de productos (labios, rostro, ojos), leer noticias en el blog, contactar a la empresa, registrarse e iniciar sesión.
2. **Módulo Administrador (Privado):** Panel de control (Dashboard) destinado a la gestión del inventario (crear, editar y listar productos) y la administración de los usuarios registrados en el sistema.

## 🚀 Características Principales

* **Catálogo de Cosméticos:** Visualización de productos con imágenes, precios y clasificación por categorías.
* **Simulación de Sesión y Carrito:** Implementación planificada de `localStorage` para guardar temporalmente los datos del carrito y mantener la sesión del usuario.
* **Validaciones de Formularios en el Cliente:** Scripts en JavaScript para asegurar la integridad de los datos ingresados (ej. formato de RUT chileno sin puntos ni guion, longitud de contraseñas, y correos con dominios específicos).
* **Carga Dinámica de Datos:** Selectores de Región y Comuna que se actualizan dinámicamente mediante eventos.
* **Diseño Responsivo:** Estructura pensada para adaptarse a distintos tamaños de pantalla y navegadores modernos.

## 🛠️ Tecnologías Utilizadas

* HTML
* CSS
* JavaScript

## 📂 Estructura de Archivos Destacada

* `pagina_principal_home.html`: Landing page con banner promocional y productos destacados.
* `productos.html` / `detalle_producto.html`: Vistas del catálogo.
* `iniciar_sesion.html` / `registro_usuario.html`: Flujos de autenticación.
* `homeAdmin.html`: Dashboard principal del administrador.
* `Producto.html` / `mostrar_producto.html` / `nuevo_producto.html`: Vistas CRUD de inventario.
* `Usuario.html` / `mostrar_usuario.html` / `nuevo_usuario.html`: Vistas CRUD de cuentas de usuario.

## ⚙️ Instalación y Uso

1. Clona este repositorio en tu máquina local.
2. Al ser un proyecto frontend estático en esta etapa, no requiere instalación de paquetes adicionales.
3. Abre el archivo `pagina_principal_home.html` directamente en tu navegador web.
4. Asegúrate de tener JavaScript habilitado en tu navegador para el correcto funcionamiento de las validaciones y selectores dinámicos.
