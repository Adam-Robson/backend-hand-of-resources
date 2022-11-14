const { Router } = require('express');
const Pet = require('../models/Pets');

module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const pets = await Pet.getAll();
      res.json(pets);
    } catch (err) {
      next(err);
    }
  });
