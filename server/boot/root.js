const InsSaveHelper = require('../../lib/savePicHelper')

const path = require('path')
const loopback = require('loopback')

module.exports = function (server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router()
  router.get('/', (req, res) => {
    res.redirect('index.html')
  })
  router.get('/ins', (req, res) => {
    res.end()
    InsSaveHelper.savePicture('https://www.instagram.com/p/BReNCbLD-w6')
  })
  server.use(router)
  const dist = path.resolve(__dirname, '../../client/app')
  server.use(loopback.static(dist))
}

