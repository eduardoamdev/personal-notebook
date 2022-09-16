# Personal Notebook

<img src="./readme-images/angular-nestjs.jpg" alt="angular-nestjs" />

## Descripción:

Este proyecto es un blog que tiene el objetivo de ser un cuaderno online que me permita almacenar diferentes entradas con contenido de mi interés.
Estaría compuesto de tres partes:

- Base de datos MongoDB: Contiene la información necesaria para el funcionamiento del proyecto.
- API REST: Realizada con el frameword NestJS, es la encargada de interactuar con la base de datos para inyectar información o devolvérsela al cliente.
- Cuaderno: Se trata de un cliente desarrollado con Angular cuya función es la de proporcionar una plataforma mediante la cual se puedan subir y consultar artículos.

## Puesta en funcionamiento:

### Puesta en servicio de una base de datos MongoDB:

El backend apuntará a la base de datos para almacenar la información de nuestro sitio web.

Para utilizar una base de datos tenemos diferentes opciones:

- Instalar MongoDB en nuestro sistema operativo.

- Insatalar MongoDb en un docker.

- Crear un cluster en https://www.mongodb.com/atlas/database

Para conectar con el backend deberemos obtener la url de nuestra base de datos. Si estamos trabajando en local será MONGO_DB=mongodb://localhost:27017/blog (esto quiere decir que en el puerto 27017 de nuestra ip local 127.0.0.1 tenemos una base de datos llamada blog a la que vamos a apuntar mediante las requests que hagamos en nuestro servidor de backend). Si por contra, estamos trabajando con Atlas, deberemos obtener la url del servicio remoto.

Es también muy recomendable instalar MongoDB Compass. Este programa consiste en una interfaz gráfica que podremos conectar a nuestra base de datos local o remota y que nos facilitará el trabajo enormemente ya que no tendremos que recurrir a la shell de Mongo.

### Introducir data para pruebas en nuestra base de datos:

Para introducir una data de pruebas a MongoDB debemos seguir estos pasos:

- Acceder a la carpeta commander.

- Ejecutar < npm i > para intalar todos los paquetes necesarios.

- Ejecutar < npm run injectInfo > para introducir información en la base de datos. Esta información procede de los archivos que se enuentran en el directorio resources. Allí podemos ver los usuarios y contraseñas que vamos a tener que podremos utilizar para acceder a la aplicación.

### Confugurar y arrancar nuestro backend:

Para poner en marcha en servidor de NestJS lo primero que debemos hacer es entrar en la carpeta backend y ejecutar el comando < npm i >. De esta manera instalaremos todos los paquetes que figuren en el package.json.

Crearemos un archivo .env que contenga las siguientes variables de entorno:

- PORT: puerto en el que correrá nuestro backend.
- MONGO_DB: url de conexión con la base de datos.
- SALT: parámetro de configuración para generar el hash de bcrypt.
- SECRET_TOKEN_WORD: parámetro para la creación de los tokens de JWT.
- SECRET_COOKIE_WORD: parámetro para que se utiliza para registrar una cookie.
- COOKIE_EXPIRATION_TIME: parámetro que determina el tiempo de validez de la cookie.

Una vez tengamos todo preparado ejecutaremos el comando npm run start:dev para arrancar el servidor en el puerto 3000 de nestro localhost.

### Arracar nuestro servidor de frontend:

Nos dirigiremos a la carpeta client y, una vez dentro, ejecutaremos el comando < npm i >.

Una vez instalados los paquetes ejecutaremos el comando ng serve. Este comando levantará un servidor en el puerto 4200 de nuestro localhost.

## Cómo utilizar la aplicación:

Con nuestro frontend, backend y base de datos arrancados, podremos abrir nuestro navegador e introducir en la barra de direcciones localhost:4200 para abrir nuestro sitio web.

A partir de aquí ya podremos loguearnos y empezar a crear, consultar, borrar y modificar nuestros artículos en la base de datos.
