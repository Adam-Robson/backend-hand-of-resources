const { Router } = require('express');
const Associate = require('../models/Associates');

module.exports = Router()

  .get('/:id', async (req, res, next) => {
    try {
      const associate = await Associate.getByID(req.params.id);
      if (!associate) next();
      res.json(associate);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const associates = await Associate.getAll();
      res.json(associates);
    } catch (err) {
      next(err);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const associate = await Associate.insert(req.body);
      res.json(associate);
    } catch (err) {
      next(err);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const associate = await Associate.updateById(req.params.id, req.body);
      if (!associate) next();
      res.json(associate);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const response = await Associate.delete(req.params.id);
      if (!response) next();
      res.send();
    } catch (err) {
      next(err);
    }
  });
