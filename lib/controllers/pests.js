const { Router } = require('express');
const Pest = require('../models/Pests');

module.exports = Router()


  .get('/:id', async (req, res, next) => {
    try {
      const pest = await Pest.getById(req.params.id);
      res.json(pest);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const pests = await Pest.getAll();
      res.json(pests);
    } catch (err) {
      next(err);
    }
  });
