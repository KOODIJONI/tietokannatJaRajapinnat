
console.log("test");
const express = require('express');
const app =express();
app.use(express.json());

app.use((req,res,next) => {
    console.log("Pyyntö saatu");
    console.log(`${req.method} ${req.url}`);
    next();
});

//curl http://localhost:3000
app.get('/', (req,res) => {
    res.send('Hello World');
});

//curl http://localhost:3000/user/joni
app.get('/user/:param',(req,res) => {
    res.send(`yksi parametri ${req.params.param}`);
});

//curl http://localhost:3000/user/joni/mayra
app.get('/user/:param1/:param2',(req,res) => {
    res.send(`kaksi parametria ${req.params.param1} ${req.params.param2}`);
});
//curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"Joni\"}" http://localhost:3000/user
app.post('/user',(req,res) => {
    console.log(req.body);
    
    res.send('POST pyyntö vastaanotettu');
});


// putti
//curl -X PUT -H "Content-Type: application/json" -d "{\"name\":\"Joni\"}" http://localhost:3000/put/1
app.put('/put/:id',(req,res) => {
    const kayttajaID = req.params.id;
    const PaivitettyKayttaja = req.body;
    console.log(`Paivitetaan kayttaja ${kayttajaID}`);
    console.log(PaivitettyKayttaja);
    res.send('PUT pyyntö vastaanotettu');
});



const port = 3000;
app.listen(port, () => {
    console.log(`Palvelin kaynnistetty http://localhost:${port}`);
});