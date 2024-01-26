const express = require('express');
const app = express();
const port = 8080;

// app.use((req, res) => {
//   console.log("Request accepted");
//   // res.send("<h1>Responded<h1>");
//   // res.send({color: 'red'});
// });

app.get('/', (req, res) => {
  console.log('Home requested');
  res.send("Home page");
});

// pattern
app.get('/r/:subreddit', (req, res) => {
  // console.log("Subereddit requested");
  // console.log(req.params);
  const {subreddit} = req.params;
  res.send(`this is ${subreddit}`);
});
app.get('/r/:subreddit/:postId', (req, res) => {
  const {subreddit, postId} = req.params;
  res.send(`this is ${subreddit}  with ID: ${postId}`);
});

app.get('/cats', (req, res) => {
  console.log('Cats requested');
  res.send("meow");
});
app.post('/cats', (req, res) => {
  console.log('Cats posted');
  res.send("meow meow");
});
app.get('/dogs', (req, res) => {
  console.log('Dogs requested');
  res.send("woof");
});




app.get(('*'), (req,res) => {
  console.log("Unknown request");
  res.send("Unknown Path");
});

app.listen(port, () => {
  console.log(`Hello Port ${port}`);
});