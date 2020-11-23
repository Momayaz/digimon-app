'use strict';

const express = require('express');
const cors = require('cors');
const pg = require('pg');
const superagent = require('superagent');
const methodOverride = require('method-override');
require('dotenv').config();



const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const client = new pg.Client(DATABASE_URL);

//routs
app.get('/home', homePage);
app.post('/adding', addToFav);
app.get('/adding', showFav);
app.get('/detail/:id', showDetails);
app.put('/detail/:id', updating);
app.delete('/delete/:id', deleting);

//routs functions
function homePage(req,res){
    let url = 'https://digimon-api.herokuapp.com/api/digimon';
    superagent.get(url).then(data=>{
        data.body.map(element=>{
            return new Store(element);
        })
        res.render('home-page', {result:data.body});
    })
}


function addToFav(req,res){
    let query = 'INSERT INTO toy(name,img,level) VALUES($1,$2,$3);';
    let values = [req.body.name, req.body.img, req.body.level];
    client.query(query,values).then(()=>{
        res.redirect('/adding');
    })
}

function showFav(req,res){
    let query = 'SELECT * FROM toy;';
    client.query(query).then(data=>{
        res.render('fave-page', {result:data.rows})
    })
}


function showDetails(req,res){
    let query = 'SELECT * FROM toy WHERE id=$1;';
    let value = [req.params.id];
    client.query(query,value).then(data=>{
        res.render('details-page', {result:data.rows[0]});
    })
}


function updating(req,res){
    let query = 'UPDATE toy SET name=$1, img=$2, level=$3 WHERE id=$4;';
    let values = [req.body.name, req.body.img, req.body.level, req.params.id];
    client.query(query,values).then(()=>{
        res.redirect('/adding');
    })
}


function deleting(req,res){
    let query = 'DELETE FROM toy WHERE id=$1;';
    let value = [req.params.id];
    client.query(query,value).then(()=>{
        res.redirect('/adding');
    })
}

function Store(data){
    this.name = data.name;
    this.image = data.img;
    this.level = data.level;
}


client.connect().then(()=>{
    app.listen(PORT,()=>console.log(`App is listening to ${PORT}`));
})