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
  });
