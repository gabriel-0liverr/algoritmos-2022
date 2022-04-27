const fetch = require('node-fetch-commonjs');

const url = 'https://www.google.com';

fetch(url)
    .then(res => res.text())
    .then(res => console.log(res.itemtype));
