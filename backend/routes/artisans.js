const express = require('express');
const router = express.Router();

const Artisan = require('../models/artisan');

// route /artisans + filtre
router.get('/', async (req, res) => {
  try {
    const { specialty } = req.query;

    let artisans;

    if (specialty) {
      artisans = await Artisan.findAll({
        where: { specialty_id: specialty }
      });
    } else {
      artisans = await Artisan.findAll();
    }

    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// route /artisans/:id
router.get('/:id', async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);

    if (!artisan) {
      return res.status(404).json({ error: 'Artisan non trouvé' });
    }

    res.json(artisan);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;