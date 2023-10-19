const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000
const publicPath = path.join(__dirname, "PortfolioUI", "build")

// console.log(publicPath)

app.use('/', (req, res, next) => {
    console.log("Test")
    next()
})

// app.use(express.static(publicPath))

app.get('/', (req, res, next) => {
    console.log("Test")
    // res.redirect("http://google.com")
    res.sendFile(publicPath + "/index.html")
})


app.get('/login', (req, res, next) => {
    console.log("Test")
    res.sendFile(publicPath + '/index.html')
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`) //Back ticks used for string interpolation
})