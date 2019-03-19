// Requires:
const logmaster = require('./modules/logmaster')
const express = require('express')
const path = require('path')

// Define and start the server.
logmaster.message('Starting server...')
const PORT = process.env.PORT || 5000
const app = express()

  .use(express.static(path.join(__dirname, 'public')))

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .get('/', (req, res) => res.render('pages/index'))
  .get('/links', (req, res) => res.render('pages/links'))

  .listen(PORT, () => logmaster.status(`Server listening on port ${ PORT }.`))

// Function to stop the server.
function stopAll() {
  logmaster.message('Stopping the server...')
  app.close()
  logmaster.status('Server stopped.')
}