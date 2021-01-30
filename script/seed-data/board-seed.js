const {Board, User} = require('../../server/db/models')

const boardData = [
  {
    name: 'Zathin',
    type: 'team'
  },
  {
    name: 'Stim',
    type: 'team'
  },
  {
    name: 'Redhold',
    type: 'team'
  },
  {
    name: 'Portfolio',
    type: 'personal'
  },
  {
    name: 'Overhold',
    type: 'personal'
  },
  {
    name: 'Prodder',
    type: 'personal'
  },
  {
    name: 'Bytecard',
    type: 'personal'
  },
  {
    name: 'Regrant',
    type: 'team'
  },
  {
    name: 'Zaam-Dox',
    type: 'team'
  },
  {
    name: 'Opela',
    type: 'personal'
  },
  {
    name: 'Economics 101',
    type: 'personal'
  },
  {
    name: 'Lotstring',
    type: 'team'
  },
  {
    name: 'Greenlam',
    type: 'personal'
  },
  {
    name: 'Zoolab',
    type: 'personal'
  },
  {
    name: 'Lotlux',
    type: 'team'
  },
  {
    name: 'Quo Lux',
    type: 'team'
  },
  {
    name: 'Redhold',
    type: 'team'
  },
  {
    name: 'Sub-Ex',
    type: 'team'
  },
  {
    name: 'Flowdesk',
    type: 'personal'
  },
  {
    name: 'Span',
    type: 'team'
  },
  {
    name: 'Quo Lux',
    type: 'personal'
  },
  {
    name: 'Y-Solowarm',
    type: 'team'
  },
  {
    name: 'Tampflex',
    type: 'team'
  },
  {
    name: 'Freshman year',
    type: 'personal'
  },
  {
    name: 'Pannier',
    type: 'personal'
  },
  {
    name: 'Hatity',
    type: 'personal'
  },
  {
    name: 'Sonair',
    type: 'team'
  },
  {
    name: 'Mat Lam Tam',
    type: 'team'
  },
  {
    name: 'Tempsoft',
    type: 'team'
  },
  {
    name: 'Subin',
    type: 'team'
  },
  {
    name: 'Zathin',
    type: 'personal'
  },
  {
    name: 'Sub-Ex',
    type: 'team'
  },
  {
    name: 'Veribet',
    type: 'team'
  },
  {
    name: 'Tresom',
    type: 'team'
  },
  {
    name: 'Bigtax',
    type: 'personal'
  },
  {
    name: 'Tampflex',
    type: 'personal'
  },
  {
    name: 'Konklux',
    type: 'personal'
  },
  {
    name: 'Veribet',
    type: 'team'
  },
  {
    name: 'Latlux',
    type: 'team'
  },
  {
    name: 'Biodex',
    type: 'team'
  },
  {
    name: 'Cookley',
    type: 'team'
  },
  {
    name: 'It',
    type: 'personal'
  },
  {
    name: 'Alphazap',
    type: 'personal'
  },
  {
    name: 'Voltsillam',
    type: 'team'
  },
  {
    name: 'Gembucket',
    type: 'team'
  },
  {
    name: 'Viva',
    type: 'team'
  },
  {
    name: 'Stronghold',
    type: 'team'
  },
  {
    name: 'Aerified',
    type: 'team'
  },
  {
    name: 'Home Life',
    type: 'personal'
  }
]

const seedBoards = async () => {
  const users = await User.findAll()
  await Promise.all(
    boardData.map(async board => {
      const newBoard = await Board.create({
        name: board.name,
        type: board.type
      })
      // if the new board is a team board, get 3 random users and add them
      if (newBoard.type === 'team') {
        const userCopy = [...users]
        const startIndex = Math.floor(Math.random() * users.length)
        const userArray = userCopy.slice(startIndex, startIndex + 3)
        await newBoard.setUsers(userArray)
      } else {
        newBoard.setUsers(users[Math.floor(Math.random() * users.length)])
      }
    })
  )
}
module.exports = seedBoards
