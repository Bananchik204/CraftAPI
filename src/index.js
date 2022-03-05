const express = require("express");
const app = express();

const crafts = [
    { name: 'diamond_sword', image: 'https://www.minecraft-modi.ru/wp-content/uploads/2021/10/Verstak-Majnkraft-kraft.jpg'  },
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/crafts/', (req, res) => {
    res.send(crafts)
});

app.get('/api/crafts/:name', (req, res) => {
   const craft = crafts.find(c => c.name === (req.params.name))
   if (!craft) res.status(404).send('No Searched')
   res.send(craft);
});

app.listen(3000, () => console.log("Listening on port 3000..."));