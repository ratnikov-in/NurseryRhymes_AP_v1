const uri = "";

const mongoose = require('mongoose')
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroOptions = require('./adminOpts')

const { TextArea, TextAreaProps } = require('@admin-bro/design-system')
const express = require('express')
const app = express()

const adminBro = new AdminBro(AdminBroOptions)

const ADMIN = {
  email: 'anglosfera',
  password: '3Ch2aCJgPRHo4kWtwWpJ',
}
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN
    }
    return null
  },
  cookieName: 'adminbro',
  cookiePassword: 'somepassword',
})

app.use(express.static('static'))
app.use(adminBro.options.rootPath, router)
const run = async () => {
  const mongooseConnection = await mongoose.connect(uri)
  const server = app.listen(process.env.PORT, "0.0.0.0", () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Web server started at http://%s:%s', host, port);
  });
}

run()
