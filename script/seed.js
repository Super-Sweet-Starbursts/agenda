'use strict'

const db = require('../server/db')
const {User, Board} = require('../server/db/models')
//need to add below to index.js
const {boards} = require('../script/seed-data')
const {users} = require('../script/seed-data')


async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const user = await Promise.all([
    User.create({
      email: 'cody@email.com',
      firstName: 'Cody',
      lastName: 'the Pug',
      password: '123456'
    })
  ])

  const randomUsers = await User.bulkCreate(users)

  console.log(`seeded ${user.length} users`)
  console.log(`seeded ${randomUsers.length} random users`)
  console.log(`seeded successfully`)
}


const seedBoards = require('./seed-data/board-seed')
const seedTasks = require('./seed-data/task-seed')

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  await db.sync({force: true})
  console.log('seeding...')
  try {
    await seedBoards()
    await seedTasks()

  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
// module.exports = seed
