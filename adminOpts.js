const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
AdminBro.registerAdapter(AdminBroMongoose)
const user = require('./resources/user')
const text = require('./resources/user')
const userModel = require('./models/userModel')
const textModel = require('./models/textModel')

const menu = {
    mongoose: { name: 'Таблицы', icon: 'SpineLabel' }
}

const { sort, timestamps } = require('./resources/sort')

module.exports = {
    resources: [
      { resource: userModel, options: { parent: menu.mongoose, ...user } },
      { resource: textModel, options: { parent: menu.mongoose, ...text } }
    ],
    version: {
      admin: true,
      app: '1.2.3-beta'
    },
    branding: {
      companyName: 'KCLS Tg Bot',
    },
    pages: {
    },
  }