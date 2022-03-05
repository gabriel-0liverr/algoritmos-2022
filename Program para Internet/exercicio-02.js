const fetch = require('node-fetch-commonjs');

const url = 'https:www.google.com';

fetch(url)
    .then(res => { console.log("status: ",res.status)});
fetch(url)
    .then(res => { console.log("url: ",res.url)});
fetch(url)
    .then(res => { console.log("content-type: ",res.headers.get('content-type'))});
fetch(url)
    .then(res => { console.log("content-encoding: ",res.headers.get('content-encoding'))});
fetch(url)
    .then(res => { console.log("size: ",res.size)});
fetch(url)
    .then(res => { console.log("body: ",res.body)});