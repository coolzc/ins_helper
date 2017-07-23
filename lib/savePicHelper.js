const InsSave = require('instagram-save')
const path = require('path')
const config = require('config')
const logger = require('winston')

class InsSaveHelper {
  static savePicture(picId, cb) {
    const dist = path.resolve(config.root, '../../pic_temp')
    InsSave(picId, dist).then(res => {
      cb(null, res)
    }).catch((err) => {
      logger.error(err)
      return cb(err)
    })
  }
}

module.exports = InsSaveHelper
