const mongoose = require("mongoose")
const shortId = require("shortid")

const shortenedUrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortenedUrl: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports=mongoose.model("shortenedUrl", shortenedUrlSchema)