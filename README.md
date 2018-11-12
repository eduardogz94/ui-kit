## Getting Started

```
git clone https://eduardogz94@bitbucket.org/eduardogz94/egui-kit.git
```

# Explanation

## Folders Struct.

```bash
.sivaUI-KIT
├── docs
│   ├── Client
│   └── Server
├── helpers
│   ├── cards
│   └── validations
├── libs
│   ├── fontawesome
│   └── ionicons
├── public /** You start adding here html and your CCC caller **/
│   ├── css
│   └── js
├── routes /** You start adding here, you add the views to the html **/
├── src
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   └── images
│   ├── components
│   │   └── Grid
│   ├── global
│   ├── log
│   └── other
├── tests
│   ├── components
│   │   ├── Buttons
│   │   ├── Cards
│   │   ├── Images
│   │   └── Inputs
│   └── views /** You also start adding here, only js that will be rendered **/
├── views
└── wiki
```

Estos cambios han sido pensados para un facil acceso al codigo al momento de que se necesite hacer un cambio en algun script, dividiendo partes de los codigo que utilizamos de tal manera de que cada script sea completamente legible y de facil entendimiento.

La division de las carpetas ha sido llevada a cabo con una vision MVC, implementando Una carpeta Models en la que podremos disenar todas las funciones de dicho modelo y asi al momento de buscar cambio en los modelos, no tener que dudar en donde estan las funciones de dicho modelo e ir directo hacia esta carpeta.

Asi mismo hemos creado una carpeta Controllers que es la que accede a los modelos y le da uso a esas funciones, dandonos a entender que si queremos cambiar un mensaje de estado o aplicar un condicional, ir directo hacia esta carpeta y no tener que cambiar de script a script en buscar de cambios.

Todos los nombres principales de las carpetas han sido creadas con la intencion de darle una vision profunda al programador de que podra conseguir en cada carpeta y darle un entendimiento lo mas rapido posible, aplicando asi nombres generales de facil vision para cada carpeta.

Asi mismo esta estructura permite escalabilidad debido a que todo ha sido desglosado precisamente para poder abarcar mas modelos y controlladores, de tal manera que el codigo no se vera mayormente afectado por un cambio o aumento de funcionalidades, modelos, controlladores o rutas. La estructura siempre mantendra su orden preciso y su entendimiento de inmediato gracias a estos cambios que aplicamos en la estructura final.

# Documentation

In the documentation you will find how to create layout, sidebar, menus and more. Also, we document some of the key components we've created such as Chat, Popup, Cards and more.

We don't provide offline documentation. Due to the online documentation, we will be easy to make changes and will certainly make you more comfortable in reading it.

Even so, you can still access the documentation of this template at any time.

[Hit Me!](https://stisla.multinity.com/documentation)
