// load libraries
const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

// GET /api/v1/products
router.get('/', (req, res) => {
  const count = +req.query.count || 10;

  [...Array(count)].map((_, i) => {
    res.write(JSON.stringify({ id: uuidv4(), name: `product_${i + 1}` }))
  });
  res.end();
});

// GET /api/v1/products/:id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id: uuidv4(), name: `product_${id}` });
});

// POST /api/v1/products/
router.post('/', (req, res) => {
  const id = uuidv4();
  const name = req.params.name;
  res.json({ id: id, name: name });
})

module.exports = router;