const express = require('express');
const router = express.Router();

const Category = require('../models/category');
const Specialty = require('../models/specialty');
const Artisan = require('../models/artisan');

router.get('/', async (req, res) => {
  try {
    const { specialty, category } = req.query;

    let where = {};

    if (specialty) {
      where.specialty_id = specialty;
    }
    const artisans = await Artisan.findAll({
      where,
        include: {
        model: Specialty,
        required: category ? true : false,
        where: category ? { category_id: category } : undefined,
        include: {
          model: Category
        }
      }
    });
    res.json(artisans);
  } catch (error) {
    console.log(error);
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

module.exports = Artisan;
module.exports = router;
