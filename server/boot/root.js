const InsSaveHelper = require('../../lib/savePicHelper')

const path = require('path')
const loopback = require('loopback')

module.exports = function (server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router()
  //router.get('/', (req, res) => {
  //  res.sendFile(path.resolve(__dirname, '../../client/app', 'index.html'))
  //})

  server.get('/robots.txt', function (req, res) {
    res.type('text/plain')
    res.send("User-agent: *\nDisallow:")
  })

  server.use(router)
  const dist = path.resolve(__dirname, '../../client/app/')
  server.use(loopback.static(dist))
}

