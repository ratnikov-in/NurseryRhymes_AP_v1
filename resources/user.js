const AdminBro = require('admin-bro')
const { ValidationError, bundle } = AdminBro
const { sort, timestamps } = require('./sort')
const userService = require('../services/userService')
/**
 * @type {AdminBro.ResourceOptions}
 */
module.exports = {
  name: 'Пользователи ботом',
  sort,
  properties: {
    ...timestamps,
    _id: { isVisible: false },
    createdAt: { isVisible: false }
  },
  actions: {
    detailedStats: {
      actionType: 'resource',
      icon: 'Apps',
      label: 'Resource statistics',
      component: bundle('../components/detailed-stats'),
      handler: async (request, response, data) => {
        return {true: 'ueas'}
      },
      showInDrawer: true,
    },
    edit: {
      before: async (request, response, context) => {
        
        if (request.method === "post") {
          console.log(request.fields);
          let result = await userService.updateUser(request.fields)
          console.log(result);
        }
        return request
      },
    },
  }
}
