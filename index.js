const express = require("express")
const app = express()
const path = require('path')
const pageRoutes = require('./routes/pages')

const apiData = {
    "name": "John Doe",
    "age": 130,
    "weight": "150lbs",
    "height": "5ft 4in",
    "hobbies": "everything",
    "sex": "Male"
}

app.use(express.static(path.join(__dirname, 'public')))
app.use(pageRoutes)
app.get('/api', function(req, res, next) {
    res.send(apiData)
})


app.listen(5000)