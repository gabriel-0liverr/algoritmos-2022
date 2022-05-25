const express = require('express');
const request = require('request');
const app = express();

/** Decode Form URL Encoded data */
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res, next) => {
  res.send("Hello, world");
});

app.post('/posts', function (req, res) {
  res.json(req.body)

  const post = {id: req.body.id,
                text: req.body.text,
                likes: req.body.likes
            }

  console.log(post)
});

/** Run the app */
app.listen(3000);