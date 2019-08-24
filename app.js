const express = require('express')
const app = express()
const student = require('./students/student')
const port = 3000
app.use(express.json())

app.get('/student/:id/timetable', (req, res) =>

    res.send(student.getTimetable(req.params.id)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app