const loginRouter = require('./user')
function route(app) {
  app.use('/api', loginRouter)
}
module.exports = route
