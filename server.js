const express = require('express');
// const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs')

app.use('/public',express.static('public'));

app.get('/', (req, res) =>{
    res.render('base');
})

app.get('/index', (req, res) =>{
    res.render('index');
})

app.get('/about', (req, res) =>{
    res.render('about');
})

app.get('/education', (req, res) =>{
    res.render('education');
})

app.get('/skills', (req, res) =>{
    res.render('skills');
})

app.get('/projects', (req, res) =>{
    res.render('projects');
})

app.get('/contact', (req, res) =>{
    res.render('contact');
})


app.listen(3000,()=>{
    console.log('listening')
})

module.exports = app;