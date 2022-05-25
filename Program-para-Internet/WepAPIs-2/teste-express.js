const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.get("/users/:id", (req, res) => {
    users = [{
                "id": 0,
                "text": "Olá, mundo!",
                "likes": 10
            },
            {
                "id": 1,
                "text": "Aleatório!",
                "likes": 150
            }]
    id = req.params.id
    res.json(users[id])
})

app.use(function(req, res, next) {
    res.status(404).send('Não encontrado!');
});

app.listen(3000, () => {
    console.log("Servidor rodando")
})