const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const TextClassifierOptionsBuilder = require('../../../../api/services/classifiers/TextClassifierOptionsBuilder')
const ClassificationEngine = require('../../../../api/services/classifiers/ClassificationEngines/ClassificationEngine')
const DummyTextClassificationEngine = require('../../../../api/services/classifiers/ClassificationEngines/DummyTextClassifierEngine')

describe('TextClassifierOptionsBuilder', ()=>{
  let builder
  before(()=>{
    builder = new TextClassifierOptionsBuilder
    assert(builder)
  })
  describe('Default Builder', () => {
    it('should have a build function',() => {
      assert(builder.build)
    })

    it('should return an object when build is called', ()=>{
      const result = builder.build()
      expect(result).to.be.an('object')
    })

    it('should return an object with non null classificationEngine defined',  ()=> {
      const result = builder.build()
      expect(result).to.have.property('classificationEngine')
    })

    it('should build an object with a classificationEngine defined as DumyTextClassifier', function () {
      const result = builder.build()
      assert(result.classificationEngine instanceof DummyTextClassificationEngine)
    })
  })

  describe('Customized Builder', () => {
    it('should have a setClassficationEngine function', function () {
      expect(builder.setClassificationEngine).to.be.a('function')
    })
    it('should build custom options with a custom ClassificationEngine', function(){
      const MockedClassificationEngine = class CustomClassificationEngine extends ClassificationEngine{}
      const result = builder.setClassificationEngine(new MockedClassificationEngine)
        .build()
      assert(result.classificationEngine instanceof ClassificationEngine)
    })
  })
})
