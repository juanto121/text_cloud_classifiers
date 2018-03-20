const DummyTextClassificationEngine = require('./ClassificationEngines/DummyTextClassifierEngine')
const ClassificationEngine = require('./ClassificationEngines/ClassificationEngine')

module.exports = class TextClassifierOptionsBuilder{
  constructor(){
    this.textClassifierOptions = {
      classificationEngine: new DummyTextClassificationEngine()
    }
  }

  setClassificationEngine(classificationEngine) {
    if (classificationEngine && classificationEngine instanceof ClassificationEngine){
      this.textClassifierOptions.classificationEngine = classificationEngine
      return this
    }
    else {
      throw new Error('Cannot set a null classification engine ' +
        'and it must be an instance of ClassificationEngine')
    }
  }

  build(){
    return this.textClassifierOptions
  }
}
