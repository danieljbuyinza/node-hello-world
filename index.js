//console.log("Hello World")

const express = require("express")
const app = express()

app.listen(2000, () => {
    console.log("listening on 2000")
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/about', (req, res) => {
    res.send("This is the about us page")
})