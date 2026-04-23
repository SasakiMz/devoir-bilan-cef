const express = require('express');
const app = express();


app.get('/artisans', async (req,res) => {
    try {
    const { specialty} = req.query;
    let artisans;

    if (specialty) {
        artisans = await Artisan.findAll({
            where: { specialty_id: specialty}
        });
    } else {
        artisans = await Artisan.findAll()
    }
    res.json(artisans);
} catch (error) {
    res.status(500).json({error: 'Erreur serveur'})
}
});

app.get('/artisans', (req, res) => {
  res.send(req.url);
});
