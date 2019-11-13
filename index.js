const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const path = require("path")


const app = express()
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))
app.use(bodyParser.urlencoded({extended: true}))

// mongoose db connection
mongoose.connect("mongodb://localhost:27017/hello-world", { useNewUrlParser: true });

// schema definition
const registrationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: "Please Enter first name"
    },
    lastName: String,
    gender: String,
    country: String,
    city: String,
});
const Register = mongoose.model("Register", registrationSchema);

// routes
app.get("/register", (req, res) => {
    res.render("register")
})

app.post("/register", (req, res) => {
    const register = new Register(req.body);
    register.save()
    .then(item => {
        Register.find().then(
            items => {
                res.render("list", {users:items})
            }
        )
    })
    .catch(err=>{
        res.status(500).send("unable to save to database");
    })
})

app.listen(3000, function() {
    console.log("Server listening on 3000")
})