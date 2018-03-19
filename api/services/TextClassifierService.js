/**
 * @module TextClassifier
 * @description Abstraction for text classifiers, defines a single method  classify that takes in  plain text and returns its classification
 */
const ClassifierResponse = require('./ClassifierResponse')

module.exports = class TextClassifierService extends Service {
  classify(plaintext) {
    return new Promise((res, rej)=>{
      res(new ClassifierResponse())
    })
  }
}
