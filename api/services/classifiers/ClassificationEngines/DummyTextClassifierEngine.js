const ClassificationEngine = require('./ClassificationEngine')
const ClassifierResponse = require('./ClassifierResponse')

module.exports = class DummyTextClassifierEngine extends ClassificationEngine{
  constructor(){
    super()
  }

  classify(){
    return Promise.resolve(new ClassifierResponse())
  }
}
