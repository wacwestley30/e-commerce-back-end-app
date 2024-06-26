const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint
// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single product by its `id`
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    const { tags, ...productData } = req.body;
    const newProduct = await Product.create(productData);
    if (tags.length) {
      const productTagIdArr = tags.map((tag) => {
        return {
          product_id: newProduct.id,
          tag_id: tag.id,
        };
      });

      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(201).json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update product
router.put('/:id', async (req, res) => {
  try {
    const { tags, ...productData } = req.body;
    const updatedProduct = await Product.update(productData, {
      where: {
        id: req.params.id,
      },
    });

    if (tags && tags.length) {
      await ProductTag.destroy({
        where: { 
          product_id: req.params.id 
        },
      });

      const productTagIdArr = tags.map((tag) => {
        return {
          product_id: req.params.id,
          tag_id: tag.id,
        };
      });
      
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete one product by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
