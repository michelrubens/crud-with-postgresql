const path = require('path')

const dotenv = require('dotenv')

dotenv.config({
  quiet: true,
  path: path.resolve(__dirname, '..', '.env')
})

const userRoutes = require('./routes/user.routes')

const express = require('express')

const PORT = process.env.PORT
const publicPath = path.join(__dirname, '..', 'public')
const pagesPath = path.join(publicPath, 'pages')
const assetsPath = path.join(publicPath, 'assets')

const app = express()

app.use(express.json())

app.listen(PORT, function () {
  console.log(`Rodando em http://localhost:${PORT}`)
})

// Rota para a página index.html
app.use('/', express.static(pagesPath))

// Rota para os arquivos estáticos
app.use('/assets', express.static(assetsPath))

app.use('/users', userRoutes)
