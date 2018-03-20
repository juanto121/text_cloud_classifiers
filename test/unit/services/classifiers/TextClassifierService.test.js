const assert = require('chai').assert
const expect = require('chai').expect

describe('TextClassifierService', () => {
  let TextClassifierService
  before(() => {
    TextClassifierService = global.app.services.TextClassifierService
    assert(TextClassifierService)
  })
  describe('Default Text Classifier Service', () => {
    it('should define a classify method',()=>{
      assert(TextClassifierService.classify('some empty text'))
    })
    describe('Classify method', function () {
      it('should return a promise', function () {
        const result = TextClassifierService.classify('some empty text')
        expect(result).to.be.instanceOf(Promise)
      })
      it('should resolve with an non null object', function () {
        const result = TextClassifierService.classify('some empty text')
        result.then(function(response){
          expect(response).to.be.a('Object')
        })
      })
    })
  })
})
