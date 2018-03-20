
/**
 * @module TextClassifier
 * @description Abstraction for text classifiers, defines a single method  classify that takes in  plain text and returns its classification
 */
const TextClassifierOptionsBuilder = require('./TextClassifierOptionsBuilder')

module.exports = class TextClassifierService extends Service {

  classify(plainText, textClassifierOptions = new TextClassifierOptionsBuilder().build()) {
    const classificationEngine = textClassifierOptions.classificationEngine
    return classificationEngine.classify(plainText)
  }

}
