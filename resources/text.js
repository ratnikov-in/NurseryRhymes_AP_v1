const { sort, timestamps } = require('./sort')
const textService = require('../services/textService')
module.exports = {
  name: 'Стишки',
  sort,
  actions: {
    show: {
      showInDrawer: true,
    },
    edit: {
        before: async (request, response, context) => {
        
          if (request.method === "post") {
            console.log(request.fields);
            let result = await textService.updateText(request.fields)
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
    text : {type: 'richtext'},
    _id: { isVisible: false },
    createdAt: { isVisible: false }
  }
}