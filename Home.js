const express = require('express');
const app = express();

// import { ParallaxController } from 'parallax-controller';
// const controller = ParallaxController.init();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(3000);
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/journal', (req, res) => {
    res.render('journal');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/projects', (req, res) => {    
    res.render('projects');
});
