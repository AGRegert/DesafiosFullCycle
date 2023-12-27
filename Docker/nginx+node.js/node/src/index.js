const express = require('express')
const { queryPromise } = require('./queryPromise')

async function insertPerson(person) {
  const sqlInsert = `INSERT INTO people (name) SELECT '${person}' WHERE NOT EXISTS (SELECT * FROM people WHERE name = '${person}')`
  await queryPromise.query(sqlInsert, person)
}

async function initDatabase() {
  const sqlTable = `CREATE TABLE IF NOT EXISTS people(id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id))`
  await queryPromise.query(sqlTable)

  insertPerson('Airton Senna')
  insertPerson('Nelson Piquet')
  insertPerson('Nigel Mansell')
}


async function initApp() {
  const app = express()

  app.get('/', async (req, res) => {
    const selectCharacters = `SELECT * FROM people`
    const allPeople = await queryPromise.query(selectCharacters)

    const html = `<h1>Full Cycle Rocks!</h1>\n
  <ul>
    ${allPeople.map(person => `<li>${person.name}</li>`).join('')}
  </ul>`

    res.send(html)
  })

  return app;
}

async function createApp() {
  await initDatabase()

  return initApp()
}

module.exports = createApp
