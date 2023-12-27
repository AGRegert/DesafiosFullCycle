const express = require('express')
const { queryPromise } = require('./queryPromise')

async function createApp() {
  const app = express()
  const sqlTable = `CREATE TABLE IF NOT EXISTS people(id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id))`;

  await queryPromise.query(sqlTable)
  
  // insert into table people if name not exists
  const person1 = 'André Germano Regert'
  const sqlInsert1 = `INSERT INTO people (name) SELECT '${person1}' WHERE NOT EXISTS (SELECT * FROM people WHERE name = '${person1}')`
  await queryPromise.query(sqlInsert1, person1)
  
  const person2 = 'Airton Senna'
  const sqlInsert2 = `INSERT INTO people (name) SELECT '${person2}' WHERE NOT EXISTS (SELECT * FROM people WHERE name = '${person2}')`
  await queryPromise.query(sqlInsert2, person2)

  app.get('/', async (req, res) => {
    const selectCharacters = `SELECT * FROM people`
    const allPeople = await queryPromise.query(selectCharacters)

    const html = `<h1>Full Cycle Rocks!</h1>\n
  <ul>
    ${allPeople.map(person => `<li>${person.name}</li>`).join('')}
  </ul>`

    res.send(html)
  })
  return app
}

module.exports = createApp