const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')

const { TextArea, TextAreaProps } = require('@admin-bro/design-system')
AdminBro.registerAdapter(AdminBroMongoose)
const user = require('./resources/user')
const text = require('./resources/text')
const userModel = require('./models/userModel')
const textModel = require('./models/textModel')
const category = require('./resources/category')
const categoryModel = require('./models/categoryModel')
const menu = {
    mongoose: { name: 'Таблицы', icon: 'SpineLabel' }
}

const { sort, timestamps } = require('./resources/sort')

module.exports = {
    resources: [
      { resource: userModel, options: { parent: menu.mongoose, ...user } },
      { resource: textModel, options: { parent: menu.mongoose, ...text } },
      { resource: categoryModel, options: { parent: menu.mongoose, ...category } }
    ],
    version: {
      admin: true,
      app: '1.2.3-beta'
    },
    branding: {
      companyName: 'KCLS Tg Bot',
    },
    assets: { styles: ['/admin-bro-style-overrides.css'] }
  }