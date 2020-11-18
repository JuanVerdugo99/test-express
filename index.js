// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.status = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hello world')
// });

// server.listen(3000, () => {
//     console.log('Server on port 3000')
// })

const express = require('express')
const app = express()

app.use(express.json())

app.all('/user', (req, res, next) => {
    console.log('Por aqui paso')
    next()
})

app.get('/user', (req, res) => {
    res.json({
        username: 'Juan',
        lastname: 'Verdugo'
    })
})

app.post('/user/:id', (req,res) =>{
    console.log(req.body)
    console.log(req.params)
    res.send('POST REQUEST RECEIVED')
});

app.put('/user/:id', (req, res) => {
    console.log(req.body)
    res.send(`User ${req.params.id} updated`)
})

app.delete('/user/:id', (req, res) => {
    res.send(`USER ${req.params.id} DELETED`)
})

app.listen(5000, () => {
    console.log('Server on port 5000')
});