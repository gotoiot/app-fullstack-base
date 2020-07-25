# DAW Project Template

<table>
  <tr>
   <td><strong>Authors</strong></td>
   <td>Agustin Bassi - Brian Ducca - Santiago Germino</td>
  </tr>
  <tr>
   <td><strong>Year</strong></td>
   <td>2020</td>
  </tr>
  <tr>
  <tr>
   <td><strong>Licence</strong></td>
   <td>GPLV3+</td>
  </tr>
  <tr>
  <tr>
   <td><strong>Details</strong></td>
   <td>Proyecto de base para Desarrollo de Aplicaciones Web</td>
  </tr>
  <tr>
  <tr>
   <td><strong>Notes</strong></td>
   <td>Redaccion en UTF-8, puede haber diferencias de lenguaje en algunas palabras</td>
  </tr>
  <tr>
</table>

## 
## Tabla de contenido

* [Introduccion](#introduccion)
* [Instalar dependencias](#instalar-dependencias)
* [Correr la aplicacion](#correr-la-aplicacion)
* [Probar la aplicacion](#probar-la-aplicacion)
* [Compilar de Typescript a Javascript](#compilar-de-typescript-a-javascript)
* [Detalles de implementacion del proyecto](#detalles-de-implementacion-del-proyecto)
* [Licencia](#Licencia)

## 
## Introduccion

Este proyecto sirve como base para todas las clases de la asignatura Desarrollo de Aplicaciones Web. En la siguiente figura se puede ver una descripcion general de la arquitectura.

![architecture](doc/architecture.png)

Tal como se explica en la figura anterior, el cliente web se comunica con la aplicacion de NodeJS mediante requests HTTP. En la siguiente figura se puede ver una imagen del cliente funcionando.

![client-running](doc/client-running.png)

## 
## Instalar dependencias

La aplicacion requiere de las siguientes dependencias, disponibles en cualquier sistema operativo.

* Docker (Pasos de instalacion en la [documentacion oficial](https://docs.docker.com/get-docker/)).
* Docker Compose (Pasos de instalacion en la [documentacion oficial](https://docs.docker.com/get-docker/)).

## 
## Correr la aplicacion

1. El primer paso es realizar un fork del proyecto. Ir al repositorio y seguir los pasos al presionar el boton "fork" en el margen superior del proyecto. Al momento de realizar el fork ponerle el nombre `daw-project` borrando la palabra `template`.

2. Descargar el repositorio desde la cuenta personal de Github (es decir el proyecto luego de aplicar el fork a cada cuenta).

```
git clone https://github.com/USUARIO/daw-project.git
cd daw-project/
```

3. Esta accion levantara todos los servicios de la aplicacion en una sola accion. Los servicios que se van a desplegar son un compilador de Typescript, un motor de NodeJS 10, una base de datos MySQL 5.7 y el administrador de base de datos PHPMyAdmin. Iniciar la aplicacion con el siguiente comando. 

```
docker-compose up
```

Para detener la aplicacion presionar `CTRL+C` en la terminal.

## 
## Probar la aplicacion

Para probar la aplicacion realizar las siguientes acciones:

* Abrir el navegador en la direccion [http://localhost:8000/](http://localhost:8000/) para visualizar el cliente HTTP. 
* Abrir el navegador en la direccion [http://localhost:8001/](http://localhost:8001/) para visualizar el administrador PHPMyAdmin.

_Para acceder a la base de datos desde PHPMyAdmin ingresar el usuario y contrasena configurados en el archivo `docker-compose.yml`_

## 
## Compilar de Typescript a Javascript

El servicio de compilacion de Typescript a Javascript se utiliza en la fase de desarrollo del proyecto para ir compilando el codigo a medida que se desarrolla. Cuando el codigo esta listo se puede quitar este servicio del archivo `docker-compose.yml`.

El codigo a compilar se toma de la carpeta `src/front/ts` y el codigo compilado se guarda en `src/front/js` a medida que el codigo typescript (archivos .ts) vayan cambiando. Para compilar el codigo typescript, ejecutar el siguiente comando.

```
docker-compose up ts-compiler
```

Para detener el compilador presionar `CTRL+C`.

## 
## Detalles de implementacion del proyecto

En esta seccion se define como esta armado el proyecto, porque se seleccionaron los nombres y el orden de cada uno. La tabla a continuacion muestra una descripcion del mismo y su explicacion.

```sh
├── db                          # directorio de la DB
│   ├── data                    # estructura y datos de la DB
│   └── dumps                   # directorio de estructuras de la DB
│       └── smart_home.sql      # estructura con la base de datos "smart_home"
├── doc                         # documentacion general del proyecto
└── src                         # directorio codigo fuente
│   ├── back                    # directorio para el backend de la aplicacion
│   │   ├── index.js            # codigo principal del backend
│   │   ├── mysql-connector.js  # codigo de conexion a la base de datos
│   │   ├── package.json        # configuracion de proyecto NodeJS
│   │   └── package-lock.json   # configuracion de proyecto NodeJS
│   └── front                   # directorio para el frontend de la aplicacion
│       ├── index.html          # archivo principal del cliente HTML
│       ├── js                  # codigo javascript (compilado con compilador TS)
│       ├── static              # archivos que no cambian (imagenes, CSS, fuentes)
│       └── ts                  # codigo typescript (a compilar)
├── docker-compose.yml          # archivo donde se aloja la configuracion completa
├── README.md                   # este archivo
├── CHANGELOG.md                # archivo para guardar los cambios del proyecto
├── LICENSE.md                  # licencia
```

En el archivo `CHANGELOG.md` se debe poner el historial de cambios del proyecto.

### Base de datos

La base de datos es MYSQL 5.7. El proposito de utiizar esta base es que no se requieren certificados para acceder a la base de datos, solo usuario y password. Para realizar un cambio de usuario o password se debe realizar una adecuada configuracion en el archivo `docker-compose.yml`.

Al iniciar el servicio `mysql-server`, desde el archivo `db/dumps/smart_home.sql` se toma la estructura de la base datos, y si esta no existe, la crea automaticamente.

## 
## Licencia

Este proyecto es publicado bajo licencia GPLV3+.

