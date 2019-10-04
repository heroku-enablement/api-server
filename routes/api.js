// load libraries
const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

// GET /api/v1/products
router.get('/:key', (req, res) => {
  const count = +req.query.count || 10;
  const key = req.params.key;

  [...Array(count)].map((_, i) => {
    let response = { id: uuidv4() };
    response[key] = `${key}_${i + 1}`;
    res.write(JSON.stringify(response));
  });
  res.end();
});

// GET /api/v1/:id
router.get('/:key/:id', (req, res) => {
  const id = req.params.id;
  const key = req.params.key;

  let response = { id: id };
  response[key] = `${key}_${id}`;
  res.json(response);
});

// POST /api/v1/products/
router.post('/:key', (req, res) => {
  const id = uuidv4();
  const key = req.params.key;
  const name = req.body.name;

  let response = { id: id };
  response[key] = name;
  res.json(response);
});

module.exports = router;