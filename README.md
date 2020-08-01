
# AndroidMovies
Prueba técnica Imaginamos
Nicolás Angarita Ortiz

## Configuración de la estructura
Para la estructura del proyecto se usó la metodología de **Atomic Components**

![enter image description here](https://i.imgur.com/ils3sAn.png)

Esta estructura se ve representada mediante la siguiente distribución de carpetas:

    -assets
	    -fonts
	    -images
    -components
	    -atoms
	    -molecules
	    -organisms
    -navigations
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
	"@utils/*": ["utils/*"]

Finalmente, se agregó una configuración básica de **Eslint Airbnb** y **Prettier**; también por el lado del código se utilizó **Typescript** con **ES6**.
