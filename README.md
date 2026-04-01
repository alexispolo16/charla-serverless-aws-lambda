# 🚀 Cero a Producción: APIs Serverless con AWS Lambda

Este repositorio contiene ejemplos prácticos desarrollados para la charla:

## 🎤 Cero a Producción: APIs Serverless con AWS Lambda

---

## 📌 Descripción

Proyecto demostrativo de cómo construir APIs utilizando arquitectura serverless con AWS Lambda, sin necesidad de administrar servidores.

Incluye ejemplos desde un “Hola Mundo” hasta un CRUD básico para entender cómo funcionan las peticiones HTTP, el manejo de eventos y la construcción de lógica en funciones serverless.

---

## 📂 Estructura del proyecto

- `hola_mundo.js` → Ejemplo básico de respuesta dinámica  
- `crud.js` → Ejemplo de API CRUD simulada  

---

## ⚙️ ¿Qué hace cada archivo?

### 🔹 holamundo.js
- Recibe un parámetro `nombre` desde la URL  
- Ejemplo: `https://midominio.com/?nombre=Alexis`  
- Devuelve un saludo personalizado en formato JSON  
- Usa “Mundo” como valor por defecto si no se envía el parámetro  

---

### 🔹 crud.js
Simula una API REST básica sin base de datos:

- **GET /usuarios** → Lista todos los usuarios  
- **GET /usuarios/{id}** → Obtiene un usuario por ID  
- **POST /usuarios** → Crea un usuario  
- **PUT /usuarios/{id}** → Actualiza un usuario  
- **DELETE /usuarios/{id}** → Elimina un usuario  

📌 Nota: Los datos se almacenan en memoria, es un ejemplo educativo.
