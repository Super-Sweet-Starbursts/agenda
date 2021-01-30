const {User, Board, ChecklistItem, Task} = require('../../server/db/models')

const snoopyUser = {
  email: 'snoopy@email.com',
  firstName: 'Snoopy',
  lastName: 'Brown',
  password: '123456',
  isAdmin: true
}

const charlieUser = {
  email: 'charlie@email.com',
  firstName: 'Charlie',
  lastName: 'Brown',
  password: '123456'
}

const boardOne = {
  name: 'Zathin',
  type: 'team'
}

const taskOne = {
  name: 'call mom',
  description:
    "Mom is nagging me that I haven't called her in dacades (such a lie).  But I need to call her tonight to keep her happy and quiet.",
  dueDate: '2020-01-30',
  type: 'todo',
  label: 'red'
}

const taskTwo = {
  name: 'go grocery shopping',
  description:
    "Cody and I need to go grocery shopping because Cody's food is out",
  dueDate: '2020-02-02',
  type: 'done',
  label: 'orange'
}

const checkListOne = {description: 'Water plants', completed: false}
const checkListTwo = {description: 'Call Michael at 12pm', completed: false}

const seedAssociations = async () => {
  try {
    const snoopy = await User.create(snoopyUser)
    const charlie = await User.create(charlieUser)
    const board = await Board.create(boardOne)
    await board.setUsers([snoopy, charlie])

    const callingMom = await Task.create(taskOne)
    const grocery = await Task.create(taskTwo)
    await callingMom.setUsers([snoopy, charlie])
    await grocery.setUsers([snoopy, charlie])

    const waterPlant = await ChecklistItem.create(checkListOne)
    const callMichael = await ChecklistItem.create(checkListTwo)
    await snoopy.setChecklistItems([waterPlant, callMichael])
  } catch (err) {
    console.log(err)
  }
}

module.exports = seedAssociations
