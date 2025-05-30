<h1 align="center">Entrega1_Pisano </h1>

<h2> escripcion</h2>

Proyecto que comprende un server con diferentes endpoints para manejar productos y carritos

<h3>Productos</h3>

La clase productos maneja el array de productos, el cual se persiste en el directorio data en el file productos.json.

<h4> Un producto contiene </h4>

<ul>
<li>id: ID unico generado automaticamente </li>
<li>titulo</li>
<li>Descripcion</li>
<li>Thubnail: imagen miniatura</li>
<li>Precio</li>
<li>Stock</li>
<li>Codigo</li>
</ul>

<h4>Endpoints</h4>

<ul>
<li>GET localhost:8080/products: Devuelve todos los productos </li>
<li>GET localhost:8080/products/:id Devuelve el producto con ID = id </li>
<li>POST localhost:8080/products: Agrega un nuevo producto </li>
<li>PUT localhost:8080/products/:id Actualiza el producto con ID = id </li>
<li>DEL localhost:8080/products/: Elimina el producto con ID = id </li>
</ul>

<h4>Body</h4>
<h5>Agregar un producto</h5>

el body para agregar un producto es (ejemplo)
<pre> ```json
{
    "thumbnail": "http://http2.mlstatic.com/D_738318-MLU72027189565_092023-I.jpg",
    "title": "Testeando la api",
    "description": "un simple producto para testear la api",
    "price": 100,
    "stock": 60,
    "code": "NEW004"
}``` </pre>

Todos los campos son obligatorios
Price y Stock deben ser numericos y positivos
code debe ser unico
los demas campos deben ser Strig

<h5>Update un producto</h5>

No hace falta enviar todos los campos, se puede enviar solo el cambio que desea cambiarse.

Ejemplo para cambiar stock

{
    "stock": 800
}

