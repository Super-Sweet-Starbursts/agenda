const {User} = require('../../server/db/models')

const users = [
  {
    firstName: 'Shermie',
    lastName: 'Zanelli',
    email: 'szanelli0@ezinearticles.com',
    password: 'wPCWNjW5VN92',
    googleId: '9ed3b858-74fb-41be-bd38-c9ee56aa1cec'
  },
  {
    firstName: 'Henryetta',
    lastName: 'Nairns',
    email: 'hnairns1@hhs.gov',
    password: 'bwVBLP',
    googleId: 'b6708b3e-3bb9-4e33-9f5b-7688efe8d484'
  },
  {
    firstName: 'Daphna',
    lastName: 'Matteacci',
    email: 'dmatteacci2@apple.com',
    password: '4oelxK4G',
    googleId: '2cb0fc7b-48d7-417d-a81f-4d70963cf466'
  },
  {
    firstName: 'Cheryl',
    lastName: 'Stowe',
    email: 'cstowe3@lulu.com',
    password: 'vwFReooEBz',
    googleId: '77f19013-a62a-495c-a36a-6622385a669b'
  },
  {
    firstName: 'Gare',
    lastName: 'Twaite',
    email: 'gtwaite4@wikispaces.com',
    password: 'YX00ENsV',
    googleId: 'aaa6364e-1247-4528-a3a0-5199f1e9859d'
  },
  {
    firstName: 'Nicolette',
    lastName: 'Degan',
    email: 'ndegan5@simplemachines.org',
    password: 'g0VGAwr6',
    googleId: 'd0ae2cc7-83da-4538-8cea-6832419f4b89'
  },
  {
    firstName: 'Lillian',
    lastName: 'Leving',
    email: 'lleving6@behance.net',
    password: 'JXStdBh',
    googleId: '20079e75-604f-48ab-837a-c3a235159fcb'
  },
  {
    firstName: 'Bea',
    lastName: 'Coiley',
    email: 'bcoiley7@privacy.gov.au',
    password: 'WBHGZzPaYmG',
    googleId: 'd3332a55-34de-4567-93e2-2ddd0fdd0b9f'
  },
  {
    firstName: 'Leda',
    lastName: 'Tyrie',
    email: 'ltyrie8@auda.org.au',
    password: 'krDsnyPs3NS',
    googleId: '3f0b68d6-4dd4-4f68-ba47-70b09e9ad860'
  },
  {
    firstName: 'Mareah',
    lastName: 'Swiffin',
    email: 'mswiffin9@twitter.com',
    password: '8MIAQx',
    googleId: '685b802e-1a53-48d7-b0d9-693ab30356f3'
  },
  {
    firstName: 'Gunther',
    lastName: 'Mityushkin',
    email: 'gmityushkina@sun.com',
    password: 'lhvVDB',
    googleId: '610532ab-9cee-4a2a-b6c0-bdcdf9b88c55'
  },
  {
    firstName: 'Cly',
    lastName: 'Barukh',
    email: 'cbarukhb@narod.ru',
    password: '7odJQSIHb',
    googleId: '1dbaf1e8-3023-49ad-a5a2-8a71966d8ddd'
  },
  {
    firstName: 'Winona',
    lastName: 'Drillingcourt',
    email: 'wdrillingcourtc@amazon.co.jp',
    password: 'xxbECpoyc',
    googleId: 'cef6fcab-145f-4b8b-af81-36407236971b'
  },
  {
    firstName: 'Giovanna',
    lastName: 'Caskie',
    email: 'gcaskied@alexa.com',
    password: 'QOBL9W',
    googleId: '5f48fc49-3b86-47e2-8b8f-dcfdf18cacfe'
  },
  {
    firstName: 'Merwyn',
    lastName: 'Mullin',
    email: 'mmulline@facebook.com',
    password: 'IzO0jkF',
    googleId: 'dafebd32-530c-4826-8e77-c893120b4134'
  },
  {
    firstName: 'Rosalie',
    lastName: 'Streather',
    email: 'rstreatherf@geocities.jp',
    password: '6opApuox',
    googleId: '2b1fc383-82ac-4055-a9b4-c61cd989e515'
  },
  {
    firstName: 'Judith',
    lastName: 'Acomb',
    email: 'jacombg@netlog.com',
    password: 'Onm1AFf5iNK',
    googleId: '7451a4ff-021c-4f0d-a713-33777f5d4be5'
  },
  {
    firstName: 'Jacklyn',
    lastName: 'Hillatt',
    email: 'jhillatth@quantcast.com',
    password: 'GcGBD3sJNCo',
    googleId: 'd1ef7805-6416-4cc1-8ee3-dd09b74e2dca'
  },
  {
    firstName: 'Jerri',
    lastName: 'Schimonek',
    email: 'jschimoneki@sfgate.com',
    password: 'e5UAbc',
    googleId: '7c101030-5253-44c2-ba63-c7f52063694d'
  },
  {
    firstName: 'Jaquelin',
    lastName: 'Cumberpatch',
    email: 'jcumberpatchj@newyorker.com',
    password: 'eBUQ3d',
    googleId: '9f46cdd5-b700-4d2c-b026-d658f897210b'
  },
  {
    firstName: 'Lorri',
    lastName: 'Sunnucks',
    email: 'lsunnucksk@illinois.edu',
    password: '1IPR45',
    googleId: '9029b1a6-24b4-43c2-932f-0a5d66af6700'
  },
  {
    firstName: 'Harris',
    lastName: 'Boundy',
    email: 'hboundyl@angelfire.com',
    password: '1IIWzgLgfb',
    googleId: '1b00dc8a-9eea-4f09-a8d4-20306c6ecf75'
  },
  {
    firstName: 'Monah',
    lastName: 'Frenzl',
    email: 'mfrenzlm@indiatimes.com',
    password: 'yBt8yT9K',
    googleId: 'bd5acc4d-f103-4bf5-99c0-ecc5626be232'
  },
  {
    firstName: 'Vanya',
    lastName: 'Vautier',
    email: 'vvautiern@un.org',
    password: '9SN4eaU',
    googleId: 'dc1c6c15-a7a7-4c41-85e5-b4f5dfca9530'
  },
  {
    firstName: 'Fionnula',
    lastName: 'Leatherland',
    email: 'fleatherlando@facebook.com',
    password: 'R5fWGE',
    googleId: '6dc5e972-c9ec-4145-a4d2-1b09f1ed82b9'
  }
]

const seedUsers = async () => {
  try {
    await User.bulkCreate(users)
  } catch (err) {
    console.log(err)
  }
}

module.exports = seedUsers
