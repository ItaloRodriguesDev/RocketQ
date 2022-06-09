// O Database está importando o que foi colocado no "config".
const Database = require('./config')

// A const init foi criada para guardar as funçoes.
const initDb = {
  async init() {
    const db = await Database()

    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
    )`)

    await db.exec(`CREATE TABLE questions(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      read INT 
    )`)

    await db.close()
  }
}

initDb.init()
