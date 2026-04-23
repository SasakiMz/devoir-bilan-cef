const express = require('express');
const router = express.Router();

const Specialty = require('../models/specialty');

router.get('/', async (req, res) => {
  try {
    const specialties = await Specialty.findAll();
    res.json(specialties);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;