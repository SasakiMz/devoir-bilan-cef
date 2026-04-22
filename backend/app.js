const express = require('express');
const sequelize = require('./config/db');
const Artisan = require('./models/artisan.js');

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