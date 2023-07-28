const config = require('./service.json')
const express = require('express');
const app = express();

console.log(`worker pid=${process.pid}`);

 app.get("/heavy", (req, res) => {
    let total = 0;
    for (let i = 0; i < 5000000; i++) {
      total++;
    }
    res.send(`The result of the CPU intensive task is ${total}\n`);
  });

  app.listen(config.port, () => {
    console.log(`Server running on ${config.urls + config.port}`)
});