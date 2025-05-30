import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
export default class ProductManager {
  constructor(ruta) {
    this.products = [];
    this.currentId = 0;
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    this.file = join(__dirname, ruta, "productos.json");
  }

  async #loadProducts() {
    try {
      const data = await fs.readFile(this.file, "utf-8");
      this.products = JSON.parse(data);
      this.currentId = this.products.length > 0 ? this.products[this.products.length - 1].id : 0;
    } catch (error) {
      if (error.code === "ENOENT") {
        console.log("El archivo no existe, se creara vacio");
        this.products = [];
        this.currentId = 0;
        await fs.writeFile(this.file, JSON.stringify([], null, 2));
      }
      console.error(error);
    }
  }

  async #saveProducts() {
    try {
      await fs.writeFile(this.file, JSON.stringify(this.products, null, 2));
    } catch (error) {
      console.error(error);
    }
  }

  static async crear(ruta) {
    const instancia = new ProductManager(ruta);
    await instancia.#loadProducts();
    return instancia;
  }
  getProducts() {
    return this.products;
  }

  async addProduct(description, price, thumbnail, title, code, stock) {
    if (!description || !price || !thumbnail || !title || !code || stock === undefined) {
      throw new Error("Todos los campos son obligatorios");
    }
    if (this.products.some((product) => product.code === code)) {
      throw new Error("El código del producto debe ser único");
    }
    if (typeof price !== "number" || price <= 0) {
      throw new Error("El precio debe ser un número positivo");
    }
    if (typeof stock !== "number" || stock < 0) {
      throw new Error("El stock debe ser un número no negativo");
    }
    if (typeof description !== "string" || typeof title !== "string" || typeof thumbnail !== "string" || typeof code !== "string") {
      throw new Error("Los campos de descripción, título, miniatura y código deben ser cadenas de texto");
    }
    const newProduct = {
      id: ++this.currentId,
      description,
      price,
      thumbnail,
      title,
      code,
      stock,
    };
    this.products.push(newProduct);
    this.#saveProducts();
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      return {}
    }
    return product;
  }
}
