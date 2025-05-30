import express, { json } from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import ProductManager from "./productManager.js";
import CartManager from "./cartManager.js";

const app = express();
const PORT = 8080;

// Establezco el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataPath = join(__dirname, "data");
const productManager = await ProductManager.crear(dataPath);
const cartManager = await CartManager.crear(dataPath);

app.use(express.json());

//*********************************************** */
// ENDPOINTS DE PRODUCTOS
//*********************************************** */
// Obtener todos los productos
app.get("/api/products", (req, res) => {
  const products = productManager.getProducts();
  return res.status(201).json(products);
});

// Obtener producto by id
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  try {
    const product = productManager.getProductById(Number(id));
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
});

// Agregar un nuevo producto
app.post("/api/products", async (req, res) => {
  const { description, price, thumbnail, title, code, stock } = req.body;
  try {
    const newProduct = await productManager.addProduct(description, price, thumbnail, title, code, stock);
    console.log(newProduct);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Update de un producto
app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;
  try {
    const updatedProduct = productManager.updateProduct(Number(id), updatedFields);
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

// Eliminar un producto
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  try {
    productManager.deleteProduct(Number(id));
    return res.status(200).json({ message: "Producto eliminado correctamente", productos: productManager.getProducts() });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

//*********************************************** */
// ENDPOINTS DE CARRITOS
//*********************************************** */

app.post("/api/carts", async (req, res) => {
  try {
    const newCart = await cartManager.addCart();
    return res.status(201).json(newCart);
  } catch (error) {
    return res.status(500).json({ error: "Error al crear el carrito" });
  }
});

app.post("/api/carts/:cid/products/:pid", async (req, res) => {
  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({ error: "El body debe contener datos en formato JSON" });
  }
  const { qty } = req.body;
  if (qty === undefined || typeof qty !== "number" || isNaN(qty) || qty < 1) {
    return res.status(400).json({ error: "El campo qty es obligatorio y debe ser un número mayor o igual a 1" });
  }
  const { cid, pid } = req.params;
  try {
    const existencia = productManager.hasProductStock(Number(pid), qty);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
  try {
    const cart = await cartManager.addProductToCart(Number(cid), Number(pid), qty);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

app.get("/api/carts/:id", (req, res) => {
  const { id } = req.params;
  try {
    const cart = cartManager.getCartById(Number(id));
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(404).json({ error: "Carrito no encontrado" });
  }
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
