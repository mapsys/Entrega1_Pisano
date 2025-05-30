import express, { json } from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import ProductManager from "./productManager.js";

const app = express();
const PORT = 8080;

// Establezco el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataPath = join(__dirname, "data");
const manager = await ProductManager.crear(dataPath);

app.use(express.json());

// Obtener todos los productos
app.get("/products", (req, res) => {
  const products = manager.getProducts();
  return res.status(201).json(products);
});

// Obtener producto by id
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  try {
    const product = manager.getProductById(Number(id));
    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
});

// Agregar un nuevo producto
app.post("/products", async (req, res) => {
  const { description, price, thumbnail, title, code, stock } = req.body;
  try {
    const newProduct = await manager.addProduct(
      description,
      price,
      thumbnail,
      title,
      code,
      stock
    );
    console.log(newProduct)
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Update de un producto
app.put("/products/:id", async (req, res) => {
const { id } = req.params;
const updatedFields = req.body;
  try {
    const updatedProduct = manager.updateProduct(Number(id), updatedFields);
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

// Eliminar un producto
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  try {
    manager.deleteProduct(Number(id));
    return res.status(200).json({ message: "Producto eliminado correctamente" , productos : manager.getProducts() });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
