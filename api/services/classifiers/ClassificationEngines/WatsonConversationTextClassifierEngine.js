const config = require('../../../../config/env')
const ClassificationEngine = require('./ClassificationEngine')
const ClassifierResponse = require('./ClassifierResponse')

const watson = require('watson-developer-cloud')

const logger = require('winston')

module.exports = class WatsonConversationTextClassifierEngine extends ClassificationEngine{
  constructor(){
    super()
    this.conversation = new watson.ConversationV1({
      username: config.classifiers.watsonConversation.username,
      password: config.classifiers.watsonConversation.password,
      version_date: config.classifiers.watsonConversation.version
    })
  }

  classify(plainText){
    return new Promise((resolve, reject) =>{
      this.conversation.message({
        workspace_id: config.classifiers.watsonConversation.workspace,
        input: {text: plainText}
      }, function(err, response){
        if (err)
          reject(err)
        else {
          logger.log('info', JSON.stringify(response,null,2))
          resolve(new ClassifierResponse())
        }
      })
    })
  }
}
