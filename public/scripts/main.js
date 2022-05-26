import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //Adicionar escuta
  button.addEventListener('click', event => {
    button.addEventListener('click', handleClick)
  })

/*Quando o botao delete for clicado ele abre o modal*/
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', handleClick)
})

function handleClick() {
  //Abrir modal
  modal.open()
}
