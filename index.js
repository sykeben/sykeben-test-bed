// Requires:
const logger = require('heroku-logger')
const express = require('express')
const path = require('path')

// Define the server.
logger.info('Defining server...')
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Define pages.
logger.info('Loading pages...')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/links', (req, res) => res.render('pages/links'))
app.get('/status', (req, res) => res.render('pages/status'))

// Start the server.
app.listen(PORT, () => logger.info(`Server listening.`, { port: PORT }))

// Define HHMMSS function for use on the status page.
String.prototype.toHHMMSS = function () {
  var sec_num = parseInt(this, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  var time    = hours+':'+minutes+':'+seconds;
  return time;
}