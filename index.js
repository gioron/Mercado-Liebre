const express = require('express');
const app = express();
const path = require('path');
app.use(express.static("public"));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.listen(process.env.PORT || 4000, ()=>{
  console.log('Servidor funcionando');
});
