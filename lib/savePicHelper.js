const InsSave = require('instagram-save')
const path = require('path')
const config = require('config')

class InsSaveHelper {
  static savePicture(picId, cb) {
    const dist = path.resolve(config.root, '../../')
    InsSave(picId, './pic_temp').then(res => {
      cb(null, res)
    }).catch((err) => {
      console.log(err)
      return cb(err)
    })
  }
}

module.exports = InsSaveHelper
