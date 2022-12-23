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
  })

  .post('/', async (req, res, next) => {
    try {
      const pet = await Pet.insert(req.body);
      res.json(pet);
    } catch (err) {
      next(err);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const pet = await Pet.updateById(req.params.id, req.body);
      if (!pet) next();
      res.json(pet);
    } catch (err) {
      next(err);
    }
  })

  .delete ('/:id', async (req, res, next) => {
    try {
      const response = await Pet.delete(req.params.id);
      if (!response) next();
      res.send();
    } catch (err) {
      next(err);
    }
  });
