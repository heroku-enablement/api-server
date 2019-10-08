// load libraries
const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

const getValue = (obj) => {
  let result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

router.get('/', (req, res) => {
  res.json();
})

// GET /api/v1/:key
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

// GET /api/v1/:key/:id
router.get('/:key/:id', (req, res) => {
  const id = req.params.id;
  const key = req.params.key;

  let response = { id: id };
  response[key] = `${key}_${id}`;
  res.json({ ...response, ...getValue(req.query) });
});

// POST /api/v1/:key
router.post('/:key', (req, res) => {
  res.json({ id: uuidv4(), ...getValue(req.body) });
});

module.exports = router;