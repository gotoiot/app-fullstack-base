# DAW App Base

Authors: Agustin Bassi, Brian Ducca, Matias Ramos

## Tabla de contenidos

* [Introducción](#introducción)
* [Detalles principales](#detalles-principales)
* [Instalar dependencias](#instalar-dependencias)
* [Descargar el código](#descargar-el-código)
* [Ejecutar la aplicación](#ejecutar-la-aplicación)
* [Probar la aplicación](#probar-la-aplicación)
* [Licencia](#licencia)

## Introducción

Este repositorio sirve como proyecto base para el curso de Desarrollo de Aplicaciones Web, donde clase a clase vamos a ir agregando contenido de frontend, de backend, y también una parte extra desarrollada por cada uno.

La idea de este proyecto es contar con una base uniforme con todo lo que se necesita para desarrollar la aplicación de la materia, y que se ejecuta sobre Docker para garantizar la ejecución en diferentes plataformas y ambientes.

Para tener una idea clara sobre cómo está formada la aplicacion sobre la cual vas a desarrollar, en la imagen siguiente podes ver un diagrama de la arquitectura.

![architecture](doc/architecture.png)

## Detalles principales

Ahora que tenemos una visión general de lo que involucra la aplicación, pasemos a ver algunos detalles más específicos.

#### `El cliente web`

El cliente web es una Single Page Application que se comunica con el servicio en NodeJS mediante el envío de requests HTTP enviando JSON en cada transacción. A través del envío de los requests puede consultar el estado de dispositivos en la base de datos (a través del servicio web en NodeJS) y también cambiar el estado de los mismos.

#### `El servicio web`

La aplicación que corre como backend en este sistema está implementada en NodeJS. Este servicio se encarga de recibir los requests del cliente web y procesarlos. En algunos casos devolverá el estado de los dispositivos del hogar, y en otros controlará tales estados. Así mismo tiene comunicación con la base de datos para poder persistir de manera segura los datos de los dispositivos a lo largo del tiempo.

También es capaz de disponibilizar el contenido del cliente web para que pueda ser accedido desde el navegador.

Es importante aclarar que el servicio web de NodeJS se ejecuta sobre un contenedor de Docker.

#### `La base de datos`

La base de datos es MySQL en la versión 5.7, y permite una comunicación con distintos clientes pudiendo acceder con usuario y contraseña en texto plano. En versiones posteriores de este motor de base de datos es necesario brindar claves de acceso, por este motivo la versión 5.7 es ampliamente utilizada para fases de desarrollo.

Al igual que el servicio de NodeJS, el motor de base de datos se ejecuta sobre un contenedor de Docker.

#### `El administrador de la DB`

Si bien no es estrictamente necesario para este proyecto, en algunos casos es necesario realizar una modificación sobre la base de datos. Ya sea haciendo un ABM de un registro como así también creando nuevas columnas, tablas o bases de datos.

Para esta aplicación se utiliza PHPMyAdmin, que es un administrador de base de datos web muy utilizado. De la misma manera que el servicio en NodeJS y la DB, se ejecuta sobre un contenedor de Docker.

#### `Ecosistema Docker`

Tal como vimos, los distintos servicios se ejecutan sobre Docker. Esto permite desplegar la aplicación en múltiples sistemas y plataformas sin necesidad de realizar configuraciones particulares, ya que Docker se encarga de abstraer la ejecución de los servicios en contenedores de software.

Para esta aplicación, todos los detalles sobre los servicios, puertos, volúmenes, redes y demás están detallados en el archivo `docker-compose.yml`.

#### `Organización del proyecto`

Para que puedas ver y entender de manera sencilla la estructura del proyecto, armamos la siguiente ilustración que la describe. 

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
│       ├── css                 # donde alojar los estilos de la aplicación
│       ├── images              # donde se deben cargar las imágenes a mostrar en la app web
│       ├── js                  # codigo javascript que se va a desarrollar
│       └── index.html          # archivo principal del cliente HTML
├── docker-compose.yml          # archivo donde se aloja la configuracion completa
├── README.md                   # este archivo
├── CHANGELOG.md                # archivo para guardar los cambios del proyecto
├── LICENSE.md                  # licencia
```

En el archivo `CHANGELOG.md` se deberá completar el historial de cambios del proyecto.

## Instalar dependencias

Para correr este proyecto solo necesitas un navegador moderno y tener instalado el ecosistema Docker (Docker y Docker Compose).

## Descargar el código

Para descargar el código, lo más conveniente es que realices un `fork` de este proyecto a tu cuenta personal haciendo click en [este link](https://github.com/fiubaceiot/daw-app-base/fork). Una vez que ya tengas el fork a tu cuenta, descargalo con este comando (acordate de poner tu usuario en el link):

```
git clone https://github.com/TU_USUARIO/daw-app-base.git
```

Abrí la carpeta del proyecto desde VS Code cuando descargues el código.

## Ejecutar la aplicación

Una vez que descargues el código, desde la terminal accedé al directorio del proyecto y ejecutá el siguiente comando que se encarga de levantar la aplicación completa.

```
docker-compose up
```

Si querés detener la aplicación presiona `CTRL+C` en la terminal donde se iniciaron.

> _En caso que la aplicación arroje un error la primera vez que se ejecuta, detenela y volvé a iniciarla. Esto es porque el servicio en NodeJS intenta conectarse a la DB antes que esta haya sido creada. A partir de la segunda ejecución la DB está creada y ya no existe más el problema._

## Probar la aplicación

Para probar el correcto funcionamiento de los servicios básicos sobre los que correrá la futura aplicación web, desde el navegador web accedé a [http://localhost:8000/](http://localhost:8000/) para visualizar el cliente web que es servido por el servicio en NodeJS. 

En segunda instancia accedé a [http://localhost:8001/](http://localhost:8001/) para abrir el administrador de bases de datos PHPMyAdmin.

>_Para acceder a la base de datos desde PHPMyAdmin es necesario que ingreses con el usuario y contraseña configurados en el archivo `docker-compose.yml`_

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

![footer](doc/footer.png)
