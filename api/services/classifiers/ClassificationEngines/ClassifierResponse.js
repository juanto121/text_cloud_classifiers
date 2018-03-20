/*
 * Represents a the response from a classifier service.
 *
 * */

module.exports = class ClassifierResponse {
  constructor(){
    this.classification = ''
    this.confidence = 0.0
    this.entities = []
    this.service = 'NONE'
    this.serviceResponse = {}
  }
}

