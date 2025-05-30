<h1>Entrega1_Pisano </h1>

<h2> escripcion</h2>

Proyecto que comprende un server con diferentes endpoints para manejar productos y carritos

<h3>Productos</h3>

La clase ProductManager maneja el array de productos, el cual se persiste en el directorio data en el file productos.json.

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
<li>GET localhost:8080/api/products: Devuelve todos los productos </li>
<li>GET localhost:8080/api/products/:id Devuelve el producto con ID = id </li>
<li>POST localhost:8080/api/products: Agrega un nuevo producto </li>
<li>PUT localhost:8080/api/products/:id Actualiza el producto con ID = id </li>
<li>DEL localhost:8080/api/products/: Elimina el producto con ID = id </li>
</ul>

<h4>Body</h4>
<h5>Agregar un producto</h5>

el body para agregar un producto es (ejemplo)

<pre>
{
    "thumbnail": "http://http2.mlstatic.com/D_738318-MLU72027189565_092023-I.jpg",
    "title": "Testeando la api",
    "description": "un simple producto para testear la api",
    "price": 100,
    "stock": 60,
    "code": "NEW004"
}</pre>

Todos los campos son obligatorios Price y Stock deben ser numericos y positivos code debe ser unico los demas campos deben ser Strig

<h5>Update un producto</h5>

No hace falta enviar todos los campos, se puede enviar solo el cambio que desea cambiarse.

Ejemplo para cambiar stock

<pre>
{
    "stock": 800
}</pre>

<h3>Carritos</h3>

La clase CartManager maneja el array de carritos, el cual se persiste en el directorio data en el file productos.json.

<h4> Un carrito contiene </h4>

<ul>
<li>id: ID unico generado automaticamente </li>
<li>productos: un array con
<ul>
<li>Id de Producto</li>
<li>Cantidad</li>
</ul>
</li>
</ul>

<h4>Endpoints</h4>

<ul>
<li>GET localhost:8080/api/carts/cid: Devuelve el carrito con ID cid con sus productos </li>
<li>POST localhost:8080/api/carts: Crea un nuevo carrito </li>
<li>POST localhost:8080/api/carts/:cid/product/:pid Agrega el producto pid en el carrito cid </li>
</ul>

<h4>Body</h4>
<h5>Agregar un producto a un carrito</h5>

el body para agregar un producto a un carrrito es (ejemplo)

<pre>
{
    "qty": 10
}</pre>


<h2> NOTA: EL file productos_original.json es un file que conservo para obtener datos </h2>