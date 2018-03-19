const assert = require('assert')

describe('MessageController', () => {
  let MessageController

  before(() => {
    MessageController = global.app.controllers.MessageController
    assert(MessageController)
  })
})

