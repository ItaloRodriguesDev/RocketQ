const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()
route.get('/room/:roomId', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)
//                                            Vamos passar uma variável dentro do res.render{}
route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))

//Formato que o formulario de dentro da modal tem que passar a informação
route.post('/room/:room/:question/:check/:action', QuestionController.index)
// Rota para a tag form action, arquivo create pass L3, tambem foi criado um controller, RoomConroller
route.post('/room/create-room', RoomController.create)

module.exports = route
