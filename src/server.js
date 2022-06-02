const express = require('express')
const route = require('./route.js')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true })) // Midware, serve para pegar o conteudo do formulário, decodifica e passa para o controller.

server.use(route)

server.listen(3000, () => console.log('Rodando'))
