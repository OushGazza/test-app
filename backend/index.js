const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json()) // allows us to read JSON from the frontend

let data = { 
message: 'Hello from the backend!' 
notice: 'This is the default notice'
}


// Get route
app.get('/api/data', (req, res) => {
  res.json(data)
})

// Post route to update the message or notice
app.post('/api/data', (req, res) => {
   if (req.body.message !== undefinded) data.message = req.body.message
   if (req.body.notice !== undefinded) data.notice = req.body.notice
   
  res.json({ status: 'Data updated', newData: data })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})