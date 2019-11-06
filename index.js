//console.log("Hello World")

const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log("listening on 3000")
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/about', (req, res) => {
    res.send("This is the about us page")
})

app.post('/', (req, res) => {
    res.send("Got a POST request")
})

app.put('/user', (req, res) => {
    res.send("Got a PUT request at /user")
})

app.delete('/user', (req, res) => {
    res.send("Got a DELETE request at /user")
})

app.get('/users/:name', (req, res) => {
    res.send("Hello" + req.params.name)
})

app.get('*', (req, res) => {
    res.send("Sorry, we didn't find that page")
})