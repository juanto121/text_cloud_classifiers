const config = require('../config')

module.exports = {
  host: config.host || '0.0.0.0',
  port: config.port || 3000
}
