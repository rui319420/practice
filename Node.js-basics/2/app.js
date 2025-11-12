const express = require('express')

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-me', (req, res) => {
  res.redirect('/about');
})

// 404 page
app.use((req, res) => {
  res.sendFile('./views/404.html', { root: __dirname })
});