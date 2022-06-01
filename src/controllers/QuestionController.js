module.exports = {
  index(req, res) {
    const roomId = req.params.room
    const questionId = req.params.question
    const action = req.params.action
    // const password para pegar a senha da modal.
    const password = req.body.password
  }
}
