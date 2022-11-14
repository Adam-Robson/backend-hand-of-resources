const { Router } = require('express');
const Candidate = require('../models/Candidates');

module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const candidates = await Candidate.getAll();
      res.json(candidates);
    } catch (err) {
      next(err);
    }
  });
