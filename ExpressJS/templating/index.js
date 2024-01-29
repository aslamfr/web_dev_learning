const express = require('express');
const path = require('path');
const app = express();

// importing ejs package
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // find ejs in other path

app.get('/', (req, res) => {
  // res.send(`<h1>Home</h1>`);
  res.render('home');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.render('subreddit', { subreddit });
});

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random', { num });
});

app.listen(8080, () => {
  console.log("listening from port 8080");
});