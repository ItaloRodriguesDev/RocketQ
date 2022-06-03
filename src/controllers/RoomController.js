module.exports = {
  create(req, res) {
    let roomId = 123456

    //res.render para redirecionar para a rota, passando para o Id com as aspas "/room/", tambem usei template string.
    res.redirect(`room/${roomId}`)
  }
}
