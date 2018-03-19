/*eslint no-process-env: 0 */

const configs = {
  development: require('./development'),
  staging: require('./staging'),
  production: require('./production'),
  testing: require('./testing')
}

module.exports = configs[process.env.TEXT_CLASSIFIERS_ENVIRONMENT]
