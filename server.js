const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb://localhost/bitlyClone", {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set("view engine", "ejs")

app.get("/", (request,response) =>{
    response.render("index")
})

app.post("/shortenedUrls", (request, response) =>{

})
app.listen(process.env.PORT || 5000);