import express, { Request, Response } from 'express';
import Category from '../models/Category';

const router = express.Router();

// ✅ POST /api/categories - Create category with base64 image
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, type, imageUrl } = req.body;

    if (!name || !type || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newCategory = new Category({ name, type, imageUrl });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create category.', error: err });
  }
});

// ✅ GET /api/categories - List all categories
router.get('/', async (_req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch categories.', error: err });
  }
});

// ✅ DELETE /api/categories/:id - Delete category only (no file deletion)
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) return res.status(404).json({ message: 'Category not found.' });

    await Category.findByIdAndDelete(id);
    res.status(200).json({ message: 'Category deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete category.', error: err });
  }
});

// ✅ PUT /api/categories/:id - Update category with base64 image
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { name, type, imageUrl } = req.body;
    const category = await Category.findById(req.params.id);

    if (!category) return res.status(404).json({ message: 'Category not found.' });

    category.name = name || category.name;
    category.type = type || category.type;
    if (imageUrl) category.imageUrl = imageUrl;

    const updatedCategory = await category.save();
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update category.', error: err });
  }
});

export default router;
