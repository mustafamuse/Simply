const express = require("express")
const app = express()


app.set("view engine", "ejs")

app.get("/", (request,response) =>{
    response.render("index")
})
app.listen(process.env.PORT || 5000);