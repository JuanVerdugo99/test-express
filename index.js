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

//* SETTINGS
app.set('appName', 'Juan Express Tutorial')
app.set('port', '3000')
app.set('view engine', 'ejs')


//* MIDDLEWARES
app.use(express.json())
// app.use(logger);
app.use(morgan('dev'))

//* ROUTES
// app.all('/user', (req, res, next) => {
//     console.log('Por aqui paso')
//     next()
// })

app.get('/', (req, res) => {
    const data = [{name: "jon"}, {name: "carlos"}, {name: "juan"}, {name: "jasive"}]
    res.render('index.ejs', {people: data})
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

app.use(express.static('public'))

app.listen(app.get('port'), () => {
    console.log(app.get('appName'))
    console.log(`Server on port ${app.get('port')}`)
});