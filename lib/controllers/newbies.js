const { Router } = require('express');
const Newbie = require('../models/Newbies');

module.exports = Router()

  .get('/:id', async (req, res, next) => {
    try {
      const newbie = await Newbie.getById(req.params.id);
      res.json(newbie);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const newbie = await Newbie.getAll();
      res.json(newbie);
    } catch (err) {
      next(err);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newbie = await Newbie.insert(req.body);
      res.json(newbie);
    } catch (err) {
      next(err);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const newbie = await Newbie.updateById(req.params.id, req.body);
      if (!newbie) next();
      res.json(newbie);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const response = await Newbie.delete(req.params.id);
      if (!response) next();
      res.send();
    } catch (err) {
      next(err);
    }
  });
