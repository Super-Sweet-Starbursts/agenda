const {ChecklistItem, User} = require('../../server/db/models')

const checklistItemData = [
  {description: 'Fold Laundry', completed: false},
  {description: 'Do dishes', completed: true},
  {description: 'Go grocery shopping', completed: false},
  {description: 'Clean bathroom', completed: true},
  {description: 'Wash windows', completed: false},
  {description: 'Water plants', completed: false},

  {description: 'Call Ashley at 12pm', completed: false},
  {description: 'Call Magda at 12pm', completed: true},
  {description: 'Call Marcus at 12pm', completed: false},
  {description: 'Call Jesus at 12pm', completed: true},
  {description: 'Call Michael at 12pm', completed: false},

  {description: 'Call Jen at 3pm', completed: false},
  {description: 'Call Greyson at 3pm', completed: true},
  {description: 'Call Shane at 3pm', completed: false},
  {description: 'Call Josh at 3pm', completed: true},
  {description: 'Call Alex at 3pm', completed: false},

  {description: 'Schedule dentist appointment', completed: false},
  {description: 'Schedule doctors appointment', completed: true},
  {description: 'Schedule nail appointment', completed: false},
  {description: 'Schedule car appointment', completed: true},
  {description: 'Schedule haircut appointment', completed: false},

  {description: 'Spin class at 3pm', completed: false},
  {description: 'Yoga class at 3pm', completed: true},
  {description: 'Math class at 3pm', completed: false},
  {description: 'Crossfit class at 3pm', completed: true},
  {description: 'History class at 3pm', completed: false},

  {description: 'Barre class at 8am', completed: false},
  {description: 'Hot yoga class at 8am', completed: true},
  {description: 'English class at 8am', completed: false},
  {description: 'Economics class at 8am', completed: true},
  {description: 'Pilates class at 8am', completed: false},

  {description: 'Lunch with Jessie at 1pm', completed: false},
  {description: 'Lunch with Eric at 1pm', completed: true},
  {description: 'Lunch with Emilia at 1pm', completed: false},
  {description: 'Lunch with Paul at 1pm', completed: true},
  {description: 'Lunch with Julia at 1pm', completed: false},

  {description: 'Call manager before EOD', completed: false},
  {description: 'Call boss before EOD', completed: true},
  {description: 'Call client before EOD', completed: false},
  {description: 'Call career coach before EOD', completed: true},
  {description: 'Call mentor before EOD', completed: false},

  {description: 'Sign up for webinar', completed: false},
  {description: 'Sign up for classes', completed: true},
  {description: 'Sign up for consultation', completed: false},
  {description: 'Sign up for trail', completed: true},
  {description: 'Sign up for subscription', completed: false}
]

const seedChecklistItems = async () => {
  const users = await User.findAll()
  await Promise.all(
    checklistItemData.map(async items => {
      const item = await ChecklistItem.create({
        description: items.description,
        completed: items.completed
      })
      const index = Math.floor(Math.random() * users.length)
      await item.setUser(users[index])
    })
  )
  console.log('CheckList Items seeded successfully')
}

module.exports = seedChecklistItems
