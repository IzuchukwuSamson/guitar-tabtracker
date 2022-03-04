const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticatioControllerPolicy')

module.exports = (app) => {
    app.post('/register', AuthenticationControllerPolicy.register,
     AuthenticationController.register)    
}