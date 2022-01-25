const express = require('express');
const path = require ('path');

const app = express();

const publicPath=path.resolve(__dirname,'./public/')
//app.use('/static', express.static(__dirname + '/public/css'));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.listen(3000, () => console.log('Servidor en funcionamiento'));