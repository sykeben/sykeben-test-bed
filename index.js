const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

  .use(express.static(path.join(__dirname, 'public')))

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .get('/', (req, res) => res.render('pages/index'))
  .get('/links', (req, res) => res.render('pages/links'))

  .listen(PORT, () => console.log(`Listening on port ${ PORT }...`))
