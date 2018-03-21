/**
 * @module MessageController
 * @description Receives the plain text to classify.
 */

const classifierOptionsArray = []

function getClassifierOptionsArray(){
  if (classifierOptionsArray.length === 0) {
    const TextClassifierOptionsBuilder = require('../services/classifiers/TextClassifierOptionsBuilder')
    const WatsonConversationTextClassifierEngine = require('../services/classifiers/ClassificationEngines/WatsonConversationTextClassifierEngine')
    let builder =  new TextClassifierOptionsBuilder()
    const engine = new WatsonConversationTextClassifierEngine()
    builder.setClassificationEngine(engine)
    let options = [
      builder.build()
    ]
    return options
  }
  else {
    return classifierOptionsArray
  }
}

module.exports = class MessageController extends Controller {
  input(request, res){
    const message = request.payload.message
    const options = getClassifierOptionsArray()
    const classificationPromises = options.map((option) => {
      return this.services.TextClassifierService.classify(message)
    })
    Promise.all(classificationPromises)
      .then((classification) => {
        const response = res.response(JSON.stringify(classification,null,2))
        return response
      })
      .catch((error) => {
        const response = res.response(error)
        return response
      })
  }
}
