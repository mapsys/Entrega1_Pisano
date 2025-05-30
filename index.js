
import { fileURLToPath } from "url";
import { dirname, join} from "path";
import ProductManager from './productManager.js';

// Establezco el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataPath = join(__dirname, 'data');
const manager = await ProductManager.crear(dataPath);const productos = manager.getProducts();

for (const producto of productos) {
    console.log(`ID: ${producto.id}, Nombre: ${producto.title}, Precio: ${producto.price}`);
}

await manager.addProduct('Nuevo Producto', 100, 'thumbnail.jpg', 'Nuevo Producto', 'NP00590003', 50);
console.log('Producto agregado exitosamente');
console.log('Lista de productos actualizada:');
for (const producto of manager.getProducts()) {
    console.log(`ID: ${producto.id}, Nombre: ${producto.title}, Precio: ${producto.price}`);
}

let producto = manager.getProductById(1);
console.log(`Producto encontrado: ${producto.title}`);
producto = manager.getProductById(2);
console.log(`Producto encontrado: ${producto.title}`);
producto = manager.getProductById(3);
console.log(`Producto encontrado: ${producto.title}`);
producto = manager.getProductById(4);
console.log(`Producto encontrado: ${producto.title}`);
producto = manager.getProductById(5);
console.log(`Producto encontrado: ${producto.title}`);
producto = manager.getProductById(6);
console.log(`Producto encontrado: ${producto.title}`);
producto = manager.getProductById(7);
console.log(`Producto encontrado: ${producto.title}`);
producto = manager.getProductById(8);
console.log(`Producto encontrado: ${producto.title}`);
producto = manager.getProductById(9);
console.log(`Producto encontrado: ${producto.title}`);
producto = manager.getProductById(100);
console.log(`Producto encontrado: ${producto.title}`);
