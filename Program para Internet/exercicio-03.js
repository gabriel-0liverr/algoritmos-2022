const prompt = require('prompt-sync')();
const fs = require('fs');
const fetch = require('node-fetch-commonjs');

//const url = prompt('URL: ');
const url = 'https://cdn-icons-png.flaticon.com/512/29/29264.png';

fetch(url)
    .then(res => { console.log("Body: ",res.body)});
fetch(url)
	.then(res => res.body.pipe(fs.createWriteStream('C:/Users/usuario/Downloads/image.png')))
    .then(console.log("Download Realizado!"));