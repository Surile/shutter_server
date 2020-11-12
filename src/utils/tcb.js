const cloudbase = require('@cloudbase/node-sdk')
const config = require('../../cloudbaserc.json')

const tcb = cloudbase.init({
    env: config.envId,
})

const database = tcb.database()

module.exports = {
    database,
}
