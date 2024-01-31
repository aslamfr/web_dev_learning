const express = require('express');
const methodOverride = require('method-override')
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
  {
    id: uuid(),
    username: 'Todd',
    comment: 'lol that is so funny'
  },
  {
    id: uuid(),
    username: 'Mark',
    comment: 'Hahahah lol'
  },
  {
    id: uuid(),
    username: 'SkySplitter68',
    comment: 'The sky is rupturing!!!!'
  },
  {
    id: uuid(),
    username: 'Localcatgirl',
    comment: 'Meow meow meow'
  }
]

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

app.post('/comments', (req, res) => {
  // console.log(req.body);
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/edit', { comment });
})

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const updateComment = comments.find(c => c.id === id);
  updateComment.comment = newComment;
  res.redirect(303, '/comments'); // this is needed to change redirect to GET method
});

app.delete('/comments/:id', (req,res) => {
  const { id } = req.params;
  // const foundComment = comments.find(c => c.id === id);
  comments = comments.filter(c => c.id !== id);
  res.redirect(303, '/comments');
})

app.get('/tacos', (req, res) => {
  res.send("GET /tacos response");
});

app.post('/tacos', (req, res) => {
  // console.log(req.body);
  const { meat, qty } = req.body;
  res.send(`Your order is ${qty} ${meat} taco(s)`);
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Port 3000");
});

// Basic CRUD implementation
// GET /comments - list all comments
// POST /comments - create new comment
// GET /comments/:id - get one comment (usind ID)
// PATCH /comments/:id - update one comment
// DELETE /comments/:id - destroy one comment

