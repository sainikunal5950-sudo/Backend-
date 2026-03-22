// console.log("i am a kunal")
require('dotenv').config();
const express = require('express')
const app = express()
const port = 4000
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('hiteshdot.com')
})
app.get('/login', (req, res) => {
    res.send('<h1> My name is Kunal Saini </h1>')
})
app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${port}`)
})