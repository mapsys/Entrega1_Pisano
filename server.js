import express, { json } from 'express';
const app = express();
const PORT = 8080;

app.use(json());





// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);



// import ProductManager from './productManager.js';
// import path from 'path';
// const manager = await ProductManager.crear('/data');

// const productos = manager.getProducts();

// for (const producto of productos) {
//     console.log(`ID: ${producto.id}, Nombre: ${producto.title}, Precio: ${producto.price}`);
// }

// await manager.addProduct('Nuevo Producto', 100, 'thumbnail.jpg', 'Nuevo Producto', 'NP0090003', 50);
// console.log('Producto agregado exitosamente');
// console.log('Lista de productos actualizada:');
// for (const producto of manager.getProducts()) {
//     console.log(`ID: ${producto.id}, Nombre: ${producto.title}, Precio: ${producto.price}`);
// }

// let producto = manager.getProductById(1);
// console.log(`Producto encontrado: ${producto.title}`);
// producto = manager.getProductById(2);
// console.log(`Producto encontrado: ${producto.title}`);
// producto = manager.getProductById(3);
// console.log(`Producto encontrado: ${producto.title}`);
// producto = manager.getProductById(4);
// console.log(`Producto encontrado: ${producto.title}`);
// producto = manager.getProductById(5);
// console.log(`Producto encontrado: ${producto.title}`);
// producto = manager.getProductById(6);
// console.log(`Producto encontrado: ${producto.title}`);
// producto = manager.getProductById(7);
// console.log(`Producto encontrado: ${producto.title}`);
// producto = manager.getProductById(8);
// console.log(`Producto encontrado: ${producto.title}`);
// producto = manager.getProductById(9);
// console.log(`Producto encontrado: ${producto.title}`);
// producto = manager.getProductById(100);
// console.log(`Producto encontrado: ${producto.title}`);