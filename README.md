# Loopa: falso e-commerce con React

## Acerca de:
Este proyecto se trata de un falso e-commerce. Tanto los productos (sus precios, imágenes, stock) como las categorías de los mismos se generan automáticamente en función a la info cargada en una base de datos de Firebase. Cuenta con la funcionalidad de agregar items al carrito de compras con una lógica de stocks y cantidades ordenadas, y la capacidad de mantener los datos del carrito aunque hayamos cerrado nuestro navegador mediante local storage. A la hora de borrar items de manera individual o de borrar el carrito cuenta con un mensaje de confirmación. Las cantidades ordenadas se pueden modifciar tanto en la vista individual como en la visión conjunta del carrito. Al momento del checkout se le piden completar los datos de contacto al usuario, que son validados antes de permitir la finalización de la compra. Una vez terminada la compra, la app devuelve un ID de orden que puede ser utilizado para el tracking de la misma. Los stocks disponibles de la app se actualizan con cada compra.

Este repositorio tiene una pequeña demo para que veas sus funcionalidad. Click [aquí](https://github.com/fuentesjulian/react-fuentes) para verla.

## Deployment
Este proyecto está hosteado en Firebase, podés ingresar y probarlo en el siguiente link:
https://reactjs-ecommerce-coderhouse.web.app/

Si preferís correrlo de manera local, seguí los siguientes pasos:
1. Descargá este repositorio.
2. Instalá las dependencias con *npm install*
3. Corré el comando *npm start*.
4. Abrí http://localhost:3000/ en tu navegador favorito.

## Build
Este proyecto fue creado con React
### Librerías utilizadas
* [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start): permite implementar routing dinámico en la app. **Añadilo a tu proyecto con *npm i react-router-dom*.**
* [React-bootstrap](https://react-bootstrap.github.io/): provee componentes de diseño de Bootstrap. **Añadilo a tu proyecto con *npm install react-bootstrap bootstrap*.**
* [Bootstrap-icons](https://icons.getbootstrap.com/): es una librería de íconos. **Añadilo a tu proyecto con *npm i bootstrap-icons*.**
* [Firebase](https://firebase.google.com/): permite la conexión con una base de datos tipo NoSQL, tanto para leer como escribir datos. **Añadilo a tu proyecto con *npm install firebase*.**

## Encontré un error o tengo una sugerencia!
Contactame a fuentesjuli@gmail.com

***
***

# Loopa: fake e-commerce with React

## About:
This project is a fake e-commerce. All products (their prices, images, stock) and categories are popullated dinamically based on data that's stored in a Firebase Database. This app allows you to add items to a cart and it has an order and stock logic and the capability to retrieve the cart data after you closed your browser. When it comes to deleting an item or the whole cart, there's an alert that asks to confirm to proceed. All item quantities can be modified either on the cart or on the item detailed view. The fake checkout is a form where the user data is completed; all the fields are validated before the form submission. Once the purchase is finished, the app sends an order ID that can be used to track the order status. Stock availability is updated after each purchase.

This repository has a small demo video that walks you through the app. Click [here](https://github.com/fuentesjulian/react-fuentes) to watch.

## Deployment
This project is hosted in firebase, you can find it here:
https://reactjs-ecommerce-coderhouse.web.app/

You can run it locally following these steps:
1. Download this repository
2. Install all dependencies with *npm install*
3. Run the projec with *npm start*.
4. Open http://localhost:3000/ in your favorite browser.

## Build
This project was build using React
### Libraries:
* [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start): allos dynamic routing. **Add it to your project: *npm i react-router-dom*.**
* [React-bootstrap](https://react-bootstrap.github.io/): provides Bootrstrap components for React. **Add it to your project: con *npm install react-bootstrap bootstrap*.**
* [Bootstrap-icons](https://icons.getbootstrap.com/): an icons library. **Add it to your project: *npm i bootstrap-icons*.**
* [Firebase](https://firebase.google.com/): used to create a connection with a NoSQL database (read and write). **Add it to your project: *npm install firebase*.**

## Bugs or feedback!
In case you found any bug or you just want to give me feedback please reach me out at fuentesjuli@gmail.com
