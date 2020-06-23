import MockDate from 'mockdate'

MockDate.set('2020-06-23')

const data = require('./data.json')

process.env.PER_PAGE = 10
process.env.API_URL = 'https://feyz.li/api'

global.data = data

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(data)
  })
)
