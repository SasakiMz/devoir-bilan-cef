const express = require('express');
const cors = require("cors");
const sequelize = require('./config/db');

const artisansRoutes = require('./routes/artisans');
const categoriesRoutes = require('./routes/categories');
const specialtiesRoutes = require('./routes/specialties');

const app = express();

app.use(express.json());


// Connexion DB
sequelize.authenticate()
  .then(() => console.log('connexion DB ok'))
  .catch(err => console.error('erreur DB', err));


app.use(cors());

// Routes
app.use('/artisans', artisansRoutes);
app.use('/categories', categoriesRoutes);
app.use('/specialties', specialtiesRoutes);


//  serveur
app.listen(3001, () => {
  console.log('serveur ok');
});