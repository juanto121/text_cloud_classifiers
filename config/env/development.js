/*eslint no-process-env: 0 */
const env = process.env
module.exports = {
  classifiers: {
    watsonConversation: {
      username: env.WATSON_USERNAME,
      password: env.WATSON_PASSWORD,
      versionDate: env.WATSON_VERSION_DATE,
      workspaceId: env.WATSON_WORKSPACE_ID
    }
  }
}
