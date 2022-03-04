const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {sequelize} = require('./src/models')
const config = require('./src/config/config')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

require('./src/routes')(app)

sequelize.sync().then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
})
