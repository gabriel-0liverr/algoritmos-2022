class microBlog {
    #posts;

    constructor(){
        this.#posts = [];
    }

    //Faz um Post
    create(post) {
        this.#posts.push(post);
    }

    //Busca um Post de acordo com o Id procurado
    retrieve(id) {
        return this.#posts.find(post => post.id == id);
    }

    //Modifica um Post
    update(newPost) {
        //Faz a busca do Post a ser modificado
        const post = this.retrieve(newPost.id);
        //Caso não ache o Id, ele retorna
        if (!post) return;

        //Modifica os dados
        post.text = newPost.text;
        post.likes = newPost.likes;

        const index = this.#posts.indexOf(post);
        this.#posts[index] = post;
    }

    //Deleta um post de acordo com seu Id
    delete(post) {
        //Faz a busca
        const p = this.retrieve(post.id);
        const index = post.id - 1;
        if (p) { //Caso ache o Id, deleta o post
            this.#posts.splice(index, 1);
        }
    }

    //Retorna todos os posts
    retrieveAll(){
        return this.#posts;
    }
}

class Post{
    id;
    text;
    likes;

    constructor(i, t, l){
        this.id = i;
        this.text = t;
        this.likes = l;
    }
}

const express = require("express");
const { post } = require("request");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 3000;
const microblog = new microBlog();

app.get('/', (req, res) => {
    res.send('<h1>Welcome, world!</h1>');
});

app.get('/posts', (req, res) => {
    res.send(microblog.retrieveAll());
});

app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = microblog.retrieve(id);
    if (post) {
        res.send(post);
    } else {
        res.status(404).send('Post não encontrado!');
    }
});

app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = microblog.retrieve(id);
    if (post) {
        microblog.delete(post);
        res.status(204).send('Post Deletado!');
    } else {
        res.status(404).send(`Post: ${id} não encontrado!`);
    }
});

app.post('/posts', (req, res) => {
    const posts = microblog.retrieveAll();
    const newPostId = posts.length == 0 ? 1: posts.length + 1;

    const post = new Post(newPostId, req.body.text, 0);
    microblog.create(post);
    res.status(201).send(`Criado post: ${newPostId}, text: ${req.body.text}`);
});

app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = microblog.retrieve(id);
    if(!post){
        res.status(404).send(`Post: ${id} não encontrado!`)
    } else {
        const newPost = post;
        newPost.text = req.body.text;
        microblog.update(newPost);
        res.status(200).send(`Post: ${id} modificado`);
    }
});

app.patch('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = microblog.retrieve(id);

    if(!post){
        res.status(404).send(`Post: ${id} não encontrado!`)
    } else{
        post.id = req.body.post.id;
        post.text = req.body.post.text;
        post.likes = req.body.post.likes;
        microblog.update(post);
        res.status(200).send(`Post: ${id} modificado`)
    }
});

app.patch('/posts/:id/like', (req, res) => {
    const id = req.params.id;
    const post = microblog.retrieve(id);

    if(!post){
        res.status(404).send(`Post: ${id} não encontrado!`)
    } else {
        post.likes++;
        microblog.update(post);
        res.status(200).send(`Post: ${id} modificado`);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});