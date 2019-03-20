// Requires:
const logger = require('heroku-logger')
const express = require('express')
const path = require('path')

// Define and start the server.
logger.info('Starting server...')
const PORT = process.env.PORT || 5000
const app = express()

  .use(express.static(path.join(__dirname, 'public')))

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .get('/', (req, res) => res.render('pages/index'))
  .get('/links', (req, res) => res.render('pages/links'))
  .get('/status', (req, res) => res.render('pages/status'))

  .listen(PORT, () => logger.info(`Server listening on port ${ PORT }.`))