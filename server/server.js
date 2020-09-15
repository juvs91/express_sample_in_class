const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
  extended: true
}))
 
function processParams (req) {
  return Object.assign({}, req.body, req.params, req.query)
}

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/user', function (req, res) {
  let params = processParams(req)
  console.log(params)
  res.send(params)
})

// crear something from data in body
app.post('/user', (req, res) =>{
  debugger
  let params = processParams(req)
  console.log(params)
  res.send({params, data2: "some more data"})
})
// update of something that exist with the entire doc
app.put('/user/:id/:someOtherValue', (req, res) =>{
  let params = processParams(req)
  console.log(req.query)
  console.log(req.params)
  console.log(req.body)
  console.log(params)
  res.send(params)
})
// update of something that exist with partial doc
app.patch('/user/:id', (req, res) =>{
  let params = processParams(req)
  console.log(params)
  res.send(params)
})
 
app.listen(3000)
