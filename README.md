# microbit-playground

micro:bit playground

## Command Line Tool

### Requisitos previos

* Instalar [node.js](https://nodejs.org).
* Instalar `pxt` con `npm`.

```
npm install -g pxt
```

### Crear un `workspace`

En primer lugar tenemos que configurar un workspace, para esto creamos el directorio donde vamos a descargar todos los paquetes necesarios.

```
mkdir microbit
cd microbit
```

Decargamos todos los paquetes y herramientas que necesita el editor.

```
pxt target microbit
```

El comando `pxt target microbit` es equivalente al comando `npm install pxt-microbit`, aunque también hace algunas tareas adicionales como configurar el archivo `pxtcli.json` para que el apunte al `target`.

###  Trabajar con el editor web en local

Lanzamos un servidor local para poder usar el editor web desde un navegador.

```
pxt serve
```

### Crear un proyecto desde la línea de comandos

* Creamos un directorio para almacenar todos los proyectos (opcional).

```
mkdir projects
```

* Crear un directorio para el proyecto.

```
cd projects
mkdir blink
cd blink
```
* Crear los archivos necesarios del proyecto.

```
pxt init
```

* Abrir Visual Studio Code (o cualquier editor de texto) para editar el código del proyecto.

```
code .
```

* Hacemo el `build` y el `deploy` del proyecto en el dispositivo.

```
pxt deploy
```

También podemos usar `make` porque el proyecto incluye un `Makefile` para hacer el `deploy`.

## Referencias

* https://makecode.com/cli
* [MakeCode](https://www.microsoft.com/en-us/makecode?rtc=1).
* [Awesome micro:bit](https://github.com/carlosperate/awesome-microbit).  A curated list of BBC micro:bit resources.
* [Micro:bit with Arduino](https://cdn-learn.adafruit.com/downloads/pdf/use-micro-bit-with-arduino.pdf)
* [(old) micro:bit broadcast newsletter](https://microbit-broadcast.embeddedlog.com/).

### Proyectos

* https://github.com/whaleygeek/bitio
* https://github.com/virtualabs/radiobit