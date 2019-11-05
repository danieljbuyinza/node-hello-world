//console.log("Hello World")

const express = require("express")
const app = express()

app.listen(4000, function() {
    console.log("listening on 4000")
})

app.get('/', function(req, res) {
    res.send("Hello World")
})