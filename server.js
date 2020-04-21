const express = require("express")
const mongoose = require("mongoose")
const shortenedUrls = require("./models/shortenedUrls")
const app = express()

mongoose.connect("mongodb://localhost/bitlyClone", {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err))


app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false})) // so i can access the params from my request

app.get("/", (request,response) =>{
    response.render("index")
})

app.post("/shortenedUrls", async (request, response) =>{
await shortenedUrls.create({ 
    fullUrl: request.body.fullUrl
})
response.redirect("/")
})
app.listen(process.env.PORT || 5000);