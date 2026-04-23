const express   = require('express');
const sequelize = require('./config/db');
const Artisan   = require('./models/artisan.js');
const Category  = require('./models/category.js');
const Specialty = require('./models/specialty.js') ;

const app = express();

// Test connexion DB
sequelize.authenticate()
.then(() => console.log('connexion DB OK'))
.catch(err => console.error('Erreur DB', err));

app.get('/', (req,res) => {
    res.send('API fonctionne')
});

app.listen(3000, () => {
    console.log('Serveur lancé en local');
});

app.get('/artisans', async (req, res) => {
  try {
    const artisans = await Artisan.findAll();
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});


app.get('/artisans/:id', async (req,res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);
    if (!artisan) {
      return res.status(404).json({error:'Artisan non trouvé'});
    }
    res.json(artisan);} 
    catch (error) {
      res.status(500).json({error:'Erreur serveur'});
  }
});

app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.get('/specialties', async (req,res) => {
  const specialty = await Specialty.findAll();
  try {
    res.json(specialty);
  } catch (error) {
    res.status(500).json({error : 'Erreur serveur'})
  }
});