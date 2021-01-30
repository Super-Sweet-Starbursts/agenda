const {Task, Board} = require('../../server/db/models')
const txtgen = require('txtgen')

const personVerb = [
  'call',
  'talk to',
  'meet with',
  'have lunch with',
  'have dinner with',
  'get coffee with',
  'get in touch with'
]
const actionVerb = [
  'deliver',
  'build',
  'create',
  'implement',
  'program',
  'invent',
  'clean'
]

const people = [
  'Mom',
  'Dad',
  'Kathy',
  'Katie',
  'Ako',
  'Allyson',
  'Sydney',
  'Mary',
  'Jess',
  'Dan',
  'Mac',
  'the caterer',
  'the wedding planner',
  'the pizza guy'
]
const items = [
  'a project',
  'a flyer',
  'a program',
  'the event',
  'the party',
  'the menu',
  'the task list',
  'the assignment'
]

const getRandomTaskName = () => {
  if (Math.random() < 0.5) {
    const personTask =
      personVerb[Math.floor(Math.random() * personVerb.length)] +
      ' ' +
      people[Math.floor(Math.random() * people.length)]
    return personTask
  } else {
    const actionTask =
      actionVerb[Math.floor(Math.random() * actionVerb.length)] +
      ' ' +
      items[Math.floor(Math.random() * items.length)]
    return actionTask
  }
}

const types = Task.rawAttributes.type.values
const labels = Task.rawAttributes.label.values

const seedTasks = async () => {
  const boards = await Board.findAll()
  for (let i = 0; i < 50; i++) {
    const newTask = await Task.create({
      name: getRandomTaskName(),
      description: txtgen.paragraph(),
      dueDate: new Date(),
      type: types[Math.floor(Math.random() * types.length)],
      label: labels[Math.floor(Math.random() * labels.length)]
    })
    await newTask.setBoard(boards[Math.floor(Math.random() * boards.length)])
  }

  console.log('Tasks seeded successfully!')
}

module.exports = seedTasks
