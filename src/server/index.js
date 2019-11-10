const express = require('express')
const app = express()

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

app.get('/flights/:flightNumber', function (req, res) {
    const { flightNumber } = req.params
    res.send(
        db.get('flights')
            .find({ flight_number: parseInt(flightNumber) })
            .value()
    )
})

app.get('/flights/year/:year', function (req, res) {
    const { year } = req.params
    res.send(
        db.get('flights')
            .filter({ launch_year: year })
            .value()
    )
})

app.listen(3001)