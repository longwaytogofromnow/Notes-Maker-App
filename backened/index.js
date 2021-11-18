const connectToMongo=require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000

// middleware
app.use(express.json())  

// Available Routes

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})