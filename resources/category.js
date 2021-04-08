const { sort, timestamps } = require('./sort')
const categoryService = require('../services/categoryService')
module.exports = {
  name: 'Категории',
  sort,
  actions: {
    show: {
      showInDrawer: true,
    },
    edit: {
        before: async (request, response, context) => {
        
          if (request.method === "post") {
            console.log(request.fields);
            let result = await categoryService.updateCategory(request.fields)
            console.log(result);
          }
          return request
        },
    },
    new: {
        showInDrawer: true,
    },
  },
  properties: {
    ...timestamps,
    _id: { isVisible: false },
    createdAt: { isVisible: false }
  }
}