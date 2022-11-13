const { Router } = require('express');
const Associate = require('../models/Associates');

module.exports = Router()

  .get('/:id', async (req, res) => {
    const associate = await Associate.getByID(req.params.id);
    res.json(associate);
  })

  .get('/', async (req, res) => {
    const associates = await Associate.getAll();
    res.json(associates);
  });
