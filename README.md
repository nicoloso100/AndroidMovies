

# AndroidMovies
Prueba técnica Imaginamos
Nicolás Angarita Ortiz

[Descargar APK](https://drive.google.com/file/d/1xSTYhSz2E1wvo-UGhHrdoQ62XLsmbJYo/view?usp=sharing)

## Compatibilidad

 - [x] Solo para dispositivos Android
 - [x] Mínima versión de android 5.0 Lollipop (API 21)

## Requisitos para desarrollo

 1. Node js 10.16.3
 2. npm 6.9.0
 3. Openjdk-8u262-b10
 4. jre1.8.0_261

## Ejecución de la aplicación

    npm install
    npm run android

## Metodología Git

Para el flujo de Git se utilizaron las ramas master, develop y features, manteniendo un flujo de trabajo basado en GitFlow.

![enter image description here](https://i.imgur.com/o8RO0Lr.png)

## Tests e integración continua

Para automatizar el procesos de testing y despliegue de la app se utilizó App Center, conectado al proyecto de GitHub desde la rama master realiza un compilado, unas pruebas en dispositivos reales y genera un release de la apk.
![enter image description here](https://i.imgur.com/LMS3nRq.png)

![enter image description here](https://i.imgur.com/FZIQWnY.png)

## Configuración de la estructura
Para la estructura del proyecto se usó la metodología de **Atomic Components**

![enter image description here](https://i.imgur.com/ils3sAn.png)

Esta estructura se ve representada mediante la siguiente distribución de carpetas:

	-actions
		-api-calls
		-redux-actions
    -assets
	    -images
    -components
	    -atoms
	    -molecules
	    -organisms
    -interfaces
    -navigation
    -reducers
    -scenes
    -styles
    -utils

Para esta estructura se agregaron alias con el fin de mejorar el orden y entendimiento de los imports, los alias que se utilizaron son los siguientes:

	"@assets/*": ["assets/*"],
	"@components/*": ["components/*"],
	"@atoms/*": ["components/atoms/*"],
	"@molecules/*": ["components/molecules/*"],
	"@organisms/*": ["components/organisms/*"],
	"@navigations/*": ["navigations/*"],
	"@scenes/*": ["scenes/*"],
	"@services/*": ["services/*"],
	"@styles/*": ["styles/*"],
	"@utils/*": ["utils/*"],
	"@reducers/*": ["reducers/*"],
	"@actions/*": ["actions/*"],
	"@interfaces/*": ["interfaces/*"]

Finalmente, se agregó una configuración básica de **Eslint Airbnb** y **Prettier**; también por el lado del código se utilizó **Typescript** con **ES6**.

La descripción del rol de cada carpeta es el siguiente:

**actions**: Contiene las peticiones al API y las acciones de Redux
**assets**: Almacena una carpeta con las imágenes (PNG, JPG) o SVG.
**components**: Alamcena la estructura de Atomic Components.
**interfaces**: Contiene y exporta todas las interfaces utilziadas en la aplicación con la integración de Typescript.
**navigation**: Almacena la navegación de el Drawer y la navegación interna de la app.
**reducers**: Contiene los reducers de Redux.
**scenes**: Contiene las escenas principales.
**styles**: Almacena los estilos generales y la paleta de colores.
**utils**: Contiene utilidades y constantes.
