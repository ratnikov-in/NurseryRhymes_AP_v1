const { sort, timestamps } = require('./sort')
const { TextArea, TextAreaProps } = require('@admin-bro/design-system')
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
    text : {type: 'textarea'},
    categories: {isArray: true},
    _id: { isVisible: false },
    createdAt: { isVisible: false }
  }
}