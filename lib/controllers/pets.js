const { Router } = require('express');
const Pet = require('../models/Pets');

module.exports = Router()

  .get('/:id', async (req, res, next) => {
    try {
      const pet = await Pet.getById(req.params.id);
      res.json(pet);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const pets = await Pet.getAll();
      res.json(pets);
    } catch (err) {
      next(err);
    }
  });
