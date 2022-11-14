const { Router } = require('express');
const Bug = require('../models/Bugs');

module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      const bugs = await Bug.getAll();
      res.json(bugs);
    } catch (err) {
      next(err);
    }
  });
