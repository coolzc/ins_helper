const SavePicHelper = require('../../lib/savePicHelper')

module.exports = function (InsPicture) {

  /*
   *
   * get pic url from instagram
   *
   */

  InsPicture.remoteMethod('getInsPicUrl', {
    accepts: [{
      arg: 'insOriginalUrl',
      type: 'string',
    }],
    returns: {
      arg: 'resultUrl',
      type: 'string',
      root: true,
    },
    http: {
      path: '/getInsPicUrl',
      verb: 'post',
    },
  })

  InsPicture.getInsPicUrl = (insOriginalUrl, cb) => {
    SavePicHelper.savePicture(insOriginalUrl, (err, result) => {
      if (err) {
        console.log(err)
        return cb(err)
      } else {
        const resultUrl = result.source
        return cb(null, resultUrl)
      }
    })
  }
}

