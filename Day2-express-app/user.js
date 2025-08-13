const express = require('express');

const user = express.Router();


user.get("/", (req, res) => {
    const location = req.query.location;
    const name = req.query.name;
    const country = req.query.country;
    res.send(`Hello Sandhya! Name: ${name}, Location: ${location}, Country: ${country}`);
});


user.get("/:id", (req, res) => {
     const userId = req.params.id;
  const location = req.query.location;
  const name = req.query.name;
  const country = req.query.country;
    res.send(`
        ###################################<br/>
        XXXXX User ID: ${userId}, Name: ${name}, Location: ${location}, Country: ${country}
    `);
});

user.get('/try-catch', (req, res) => {
    try {
        // Correct __dirname spelling
        const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
        const jsonData = JSON.parse(data);
        res.send(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to read or parse the file' });
    }
});

module.exports = user;
