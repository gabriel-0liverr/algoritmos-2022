//-------- Config Express ---------//
const express = require("express");
const { post } = require("request");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//-------- Config Firebase --------//
var admin = require("firebase-admin");
var serviceAccount = require("./project-key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
db = admin.firestore(); //database

//------ Variáveis Definidas ------//
var posts = db.collection("posts");
now = new Date(Date.now()).toUTCString(); 

const port = 3000;

//         ...Métodos...          //
// Chama todos os posts (ok)
app.get('/posts', async (req, res) => {
    get = await posts.orderBy("date").get()
    
    const allPosts = []
    get.forEach(post => allPosts.push({id: post.id, ...post.data()}));
    res.status(200).send(allPosts);
});

//Chama um post específico (ok)
app.get('/posts/:id', async (req, res) => {
    const id = req.params.id;

    posts.where('__name__','==',id).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((post) => {
            res.status(200).send({id: post.id, ...post.data()});
        });
    })
    .catch((error) => {
        console.error("Error getting documents!");
        res.status(404).send('Post não encontrado!');
    });
});

//Chama paginas com 5 posts(...)
app.get('/posts/page/:pag', async (req, res) => {
    const start = String(req.params.pag * 5);
    console.log(req.params.pag * 5);
    get = await posts.orderBy('__name__').startAt(start).limit(5).get()

    const allPosts = []
    get.forEach(post => allPosts.push({id: post.id, ...post.data()}));
    res.status(200).send(allPosts);
});

//Deleta um post (ok)
app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    
    posts.doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
        res.status(204).send('Post Deletado!');
    })
    .catch((error) => {
        console.error("Error removing document!");
        res.status(404).send(`Post: ${id} não encontrado!`);
    });
});

//Adiciona um post (ok)
app.post('/posts', async (req, res) => {
    await posts.get().then((querySnapshot) => {
        const id = String(querySnapshot.docs.length+1);

        posts.doc(id).set({
            text : req.body.text,
            likes : 0,
            date : now
          })
          .then((docRef) => {
            console.log(`Document written with ID: ${docRef.id}`);
            res.status(201).send(`Criado post: ${docRef.id}, text: ${req.body.text}`);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
    });
});

//Modifica um post (ok)
app.put('/posts/:id', (req, res) => {
    const id = req.params.id;

    posts.doc(id).update({text: req.body.text})
    .then((docRef) => {
        console.log(`Document modified with ID: ${docRef.id}`);
        res.status(200).send(`Post: ${id} modificado`);
    })
    .catch((error) => {
        console.error("Error adding document!");
        res.status(404).send(`Post: ${id} não encontrado!`)
    });
});

//Modifica um post (ok)
app.patch('/posts/:id', (req, res) => {
    const id = req.params.id;

    posts.doc(id).update({text: req.body.text})
    .then((docRef) => {
        console.log(`Document modified with ID: ${docRef.id}`);
        res.status(200).send(`Post: ${id} modificado`);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        res.status(404).send(`Post: ${id} não encontrado!`)
    });
});

//Dá like num post específico (ok)
app.patch('/posts/:id/like', (req, res) => {
    const id = req.params.id;
    const increment = admin.firestore.FieldValue.increment(1);

    posts.doc(id).update({likes: increment})
    .then((docRef) => {
        console.log(`Post with ID: ${docRef.id} LIKED`);
        res.status(200).send(`Post: ${id} curtido!`);
    })
    .catch((error) => {
        console.error("Error adding document!");
        res.status(404).send(`Post: ${id} não encontrado!`)
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});