const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// finds all categories including its associated Products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// finds one category by its `id` including its associated Products
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(400).json({ message: 'Category not found' });
      return;
    }
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// creates a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// updates a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// deletes a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedCategory) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.json(deletedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
