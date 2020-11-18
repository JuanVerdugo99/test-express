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
const morgan = require('morgan')
const app = express()

// function logger(req, res, next) {
//     console.log (`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
//     next()
// }

app.use(express.json())
// app.use(logger);
app.use(morgan('dev'))

// app.all('/user', (req, res, next) => {
//     console.log('Por aqui paso')
//     next()
// })

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

app.use(express.static('public'))

app.listen(5000, () => {
    console.log('Server on port 5000')
});