const { Router } = require('express');
const Associate = require('../models/Associates');

module.exports = Router()
  .get('/', async (req, res) => {
    const associates = await Associate.getAll();
    res.json(associates);
  });
