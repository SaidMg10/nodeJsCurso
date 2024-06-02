const { getAge } = require("./get-age.plugin")
const { getUUID } = require("./get-id.plugin")
const { http } = require('./https-client.plugin')
const buildLogger = require('./logger.plugin')


module.exports = {
    getAge,
    getUUID,
    http,
    buildLogger,
}