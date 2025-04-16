const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080

const colors = [
  { color: ['red', 'white', 'blue', 'green'] },

  { shapes: ['circle', 'oval', 'square'] },
  { groceryList: ['eggs', 'blueberries', 'yogurt', 'honey', 'cinnamon'] }
]

app.get('/colors', (req, res) => {
  res.status(200).json(colors)
})

// sendFile will go here
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})
app.listen(port)
console.log('Server started at http://localhost:' + port)
