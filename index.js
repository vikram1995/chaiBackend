require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req,res)=>{
    res.send("vikram.com")
})

app.get('/login',(req,res)=>{
    res.send("<h1>hello this is heading 1</h1>")
})

app.get('/youtube', (req,res)=>{
    res.send("<h2>chai aur code</h2>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})