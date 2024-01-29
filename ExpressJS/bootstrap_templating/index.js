const express = require('express');
const path = require('path');
const app = express();
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

// importing ejs package
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // find ejs in other path

app.get('/', (req, res) => {
  // res.send(`<h1>Home</h1>`);
  res.render('home');
});

app.get('/cats', (req, res) => {
  const cats = [
    'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston', 'Momo'
  ];
  res.render('cats', { cats });
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render('subreddit', { ...data });
  } else {
    res.render('notfound', { subreddit });
  }
});

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random', { num });
});

app.listen(3000, () => {
  console.log("listening from port 8080");
});