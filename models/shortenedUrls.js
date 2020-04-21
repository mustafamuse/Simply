const mongoose = require("mongoose")
const shortId = require("shortid")

const shortenedUrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    ShortenedUrl: {
        type: String,
        required: true,
        default: shortId.generate
    },
    Clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports=mongoose.model("shortenedUrl", shortenedUrlSchema)