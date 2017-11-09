const cssStandards = require('spike-css-standards')
const sugarss = require('sugarss')

module.exports = ({ env }) => cssStandards({ parser: sugarss, minify: true })
