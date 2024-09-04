# API-Node-SocialMedia
API RESTful with Node.js

Computación en internet 3
- Juan Diego Lora
- Santiago Prado
- Cristian del Castillo

## Guía de Configuración y Ejecución del Proyecto

### 1. Clonar el Repositorio

Para obtener una copia local del proyecto, ejecuta los siguientes comandos en tu terminal:

```
git clone https://github.com/JD-Lora1/API-Node-SocialMedia
```

Luego, debes entrar en la carpeta, desde la terminal, con ```cd```

### 2. Instalación de Dependencias

Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) o [yarn]() correctamente instalados en tu máquina. Luego, instala las dependencias necesarias ejecutando:

```
yarn add node
```
o
```
npm install
```

### 3. Configuración del .Env

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno para configurar la aplicación:

```
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

- **PORT**: (por defecto, 3000).
- **MONGO_URI**: URI de conexión a tu base de datos MongoDB. La encuentras en tus clusters en mongo cloud
- **JWT_SECRET**: Clave secreta utilizada para la generación y validación de tokens JWT.

### 4. Iniciar el Servidor

Para iniciar el servidor, utiliza el siguiente comando:

```
yarn dev
```

El servidor se ejecutará en [http://localhost:3000](http://localhost:3000).

---

Este proyecto utiliza Node.js, TypeScript 