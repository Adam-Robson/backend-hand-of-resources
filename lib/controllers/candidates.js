const { Router } = require('express');
const Candidate = require('../models/Candidates');

module.exports = Router()

  .get('/:id', async (req, res, next) => {
    try {
      const candidate = await Candidate.getById(req.params.id);
      res.json(candidate);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const candidates = await Candidate.getAll();
      res.json(candidates);
    } catch (err) {
      next(err);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const candidate = await Candidate.insert(req.body);
      res.json(candidate);
    } catch (err) {
      next(err);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const candidate = await Candidate.updateById(req.params.id, req.body);
      if (!candidate) next();
      res.json(candidate);
    } catch (err) {
      next(err);
    }
  })

  .delete ('/:id', async (req, res, next) => {
    try {
      const response = await Candidate.delete(req.params.id);
      if (!response) next();
      res.send();
    } catch (err) {
      next(err);
    }
  });
