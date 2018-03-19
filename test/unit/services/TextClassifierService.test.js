const assert = require('assert')

describe('TextClassifierService', () => {
  let TextClassifierService

  before(() => {
    TextClassifierService = global.app.services.TextClassifierService
    assert(TextClassifierService)
  })
})

