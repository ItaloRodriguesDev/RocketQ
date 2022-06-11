const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)
//                                            Vamos passar uma variável dentro do res.render{}
route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))

// Rota para a tag form action, arquivo create pass L3, tambem foi criado um controller, RoomConroller
route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)

//Formato que o formulario de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/question/create/:room', QuestionController.create)

module.exports = route
