const { Router } = require('express');
const Bug = require('../models/Bugs');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const bug = await Bug.getByID(req.params.id);
      if (!bug) next();
      res.json(bug);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const bugs = await Bug.getAll();
      res.json(bugs);
    } catch (err) {
      next(err);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const bug = await Bug.insert(req.body);
      res.json(bug);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const bug = await Bug.updateById(req.params.id, req.body);
      if (!bug) next();
      res.json(bug);
    } catch (err) {
      next(err);
    }
  });
