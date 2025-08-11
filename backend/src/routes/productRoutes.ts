import express, { Request, Response } from 'express';
import Product from '../models/Products';

const router = express.Router();

// ✅ POST - Create Product
router.post('/', async (req: Request, res: Response) => {
  try {
    const { category, company, name, quantity, price, discountPrice, description, image } = req.body;

    if (!image || !image.startsWith('data:image')) {
      return res.status(400).json({ message: "Image (Base64) is required and must start with data:image" });
    }

    const newProduct = new Product({
      category,
      company,
      name,
      quantity,
      price,
      discountPrice,
      description,
      image,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create product.', error: err });
  }
});

// ✅ GET - All Products
router.get('/', async (_req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products.', error: err });
  }
});

// ✅ PUT - Update Product
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update product.', error: err });
  }
});

// ✅ DELETE - Delete Product
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product.', error: err });
  }
});

export default router;
