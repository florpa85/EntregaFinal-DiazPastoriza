**Proyecto de React**

*comision 47120*

Entrega Final CoderHouse

##Titulo: *"Ceramica Store"*

##Proyecto de Florencia Diaz Pastoriza
Codigo:  JS, HTML, CSS
Tools: React JS
Librerias: Chackra UI, Sweetalert2
base de datos: Firebase
Repositorio: GitHub

##Descripción: 
**App de un e-commerce.**
El usuario puede acceder a todos los productos desde el Home y a los detalles de los mismos
puede agregar productos haciendo click sobre el detalle.
En el Cart (carrito de compras) puede acceder a todos los productos seleccionados y aumentar o disminuir cantidades, ver el Subtotal y el total de la compra, eliminar productos, variar el carro o finalizar la compra.
Una vez finalizada la compra, se le pediran los datos para generar la orden y se le devolverá un numero de Orden.
Hay una validacion del e-mail y si no coincide se depliega un alerta de la librería Sweetalert2.

gitDentro del App se incluyeron todas las rutas, se utilizo el React Router Dom para introducir las mismas.
Dentro del Shopping Cart Context decidi agregar algunas constantes que se repetian dentro de el funcionamiento del Cart como para agregar las mismas haciendo uso del useContext.
En firebase subi al Storage algunas fotos para probar el funcionamiento del mismo y de ahi saque los links para cargarlo en la base de datos.
La constante db (data base)esta exportada desde el archivo main.jsx
Una vez finalizada la compra se envía la informacion a la base, los datos del usuario (sin validar) y el contenido del Cart el cual es guardado en la base de datos con un ID generado por defecto en una colección aparte.
El ID generado por la base de datos es devuelta al usuario junto con un mensaje de agradecimiento, y se vacia el carro automaticamente una vez finalizada la compra.

HTML:
index
CSS:
index

Fotos:
Carpeta assets

Componentes JSX:
main
App
NavBar
Home
Loading
ItemListContainer
 ·ItemList
    ·Item
ItemDetailContainer
    ·ItemDetail
CartContent
  ·Cart
  ·CartTotal
  .CartWidget
  .ItemCount
CheckOut

Componentes JSX Context:
ShoppingCartContext







**Gif**

[Ejemplo de navegación] en repo de GitHub

