const express = require("express")
const mongoose = require("mongoose")
const shortenedUrls = require("./models/shortenedUrls")
const app = express()

mongoose.connect( 'mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err))


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const shortUrls = await shortenedUrls.find()
  res.render('index', { shortenedUrls: shortUrls })
})

app.post('/shortenedUrls', async (req, res) => {
  await shortenedUrls.create({ fullUrl: req.body.fullUrl })

  res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
  const selectedUrl = await shortenedUrls.findOne({ shortUrl: req.params.shortUrl })
  if (selectedUrl == null) return res.sendStatus(404)

  selectedUrl.save()

  res.redirect(selectedUrl.fullUrl)
})

app.listen(process.env.PORT || 5000);